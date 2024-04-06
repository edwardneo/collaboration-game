import { usePlayer } from '@empirica/core/player/classic/react';
import React, { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { FEEDBACK_QUESTIONS } from '../../../settings/FeedbackQuestions';

// import '../css/Questionnaire.css';
import '../css/MazeGameSurvey.css';
export function MidgameSurvey({ next }) {
  const player = usePlayer();
  const [responses, setResponses] = useState(FEEDBACK_QUESTIONS.reduce(
    (obj, category) => ({...obj, [category.title]: category.questions.reduce(
      (obj, question) => ({...obj, [question.tag]: null}),
      {})}),
    {}
  ));
  const [failedSubmit, setFailedSubmit] = useState(false);
  const topRef = useRef(null);

  const setAnswer = (value, category, tag, multiselect=false) => {
    const responsesCopy = {...responses};

    if (multiselect) {
      const target = value;
      if (responsesCopy[category][tag] === null) {
        responsesCopy[category][tag] = [];
      }

      if (target.checked) {
        responsesCopy[category][tag].push(target.value);
        responsesCopy[category][tag].sort();
      } else {
        responsesCopy[category][tag] = responsesCopy[category][tag].filter(e => e !== target.value);
      }
    } else {
      responsesCopy[category][tag] = value;
    }
    
    setResponses(responsesCopy);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const surveyComplete = Object.values(responses).every(category => 
      Object.values(category).every(answer => 
        answer !== null && (Array.isArray(answer) ? answer.length !== 0 : answer.trim() !== '')
      )
    );
    if (surveyComplete) {
      player.set('midgameSurvey', responses);
      next();
    } else {
      topRef.current.scrollIntoView({ behavior: "smooth" });
      setFailedSubmit(true);
    }
  };

  const renderQuestion = (question, category, questionNum) => {
    return (
      <Question
        question={question.question}
        type={question.type}
        tag={question.tag}
        num={questionNum}
        choices={question.choices}
        value={responses[category][question.tag]}
        format={{ direction: question.direction }}
        setAnswer={(value, tag) => setAnswer(value, category, tag, question.type === 'ms')}
        key={`${question.tag}`}
      />
    );
  };

  return (
    <div className='midgame-survey'>
      <h1 className='midgame-survey-title' ref={topRef}>Midgame Survey</h1>
      <p className={`midgame-survey-blurb${failedSubmit ? ' blurb-bold' : ''}`}>Please answer all the following questions to continue.</p>
      <div className='questionnaire'>
        {MIDGAME_QUESTIONS.map((category, catIndex) => (
          <div key={catIndex}>
            <h2 className='category-title'>{category.title}</h2>
            {category.blurb ? <p>{category.blurb}</p> : null}
            <div className='midgame-questions'>{category.questions.map((question, index) => renderQuestion(question, category.title, index))}</div>
          </div>
        ))}
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  );
}
