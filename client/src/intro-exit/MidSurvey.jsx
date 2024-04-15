import React, { useState, useRef } from 'react';
import { usePlayer } from '@empirica/core/player/classic/react';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { FEEDBACK_QUESTIONS } from '../../../settings/FeedbackQuestions';
// import '../css/Questionaire.css';
import '../css/MazeGameSurvey.css';

export function MidSurvey({ next }) {
  const player = usePlayer();
  const [feedback, setFeedback] = useState(FEEDBACK_QUESTIONS.reduce(
    (obj, category) => ({
      ...obj, 
      [category.title]: category.questions.reduce(
        (o, question) => ({ ...o, [question.tag]: null }),
        {})
    }),
    {}
  ));
  const [failedSubmit, setFailedSubmit] = useState(false);
  const topRef = useRef(null);

  const setAnswer = (value, category, tag, multiselect = false) => {
    const feedbackCopy = { ...feedback };

    if (multiselect) {
      if (feedbackCopy[category][tag] === null) {
        feedbackCopy[category][tag] = [];
      }

      if (feedbackCopy[category][tag].includes(value)) {
        feedbackCopy[category][tag] = feedbackCopy[category][tag].filter(e => e !== value);
      } else {
        feedbackCopy[category][tag].push(value);
        feedbackCopy[category][tag].sort();
      }
    } else {
      feedbackCopy[category][tag] = value;
    }
    
    setFeedback(feedbackCopy);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const surveyComplete = Object.values(feedback).every(category => 
      Object.values(category).every(answer => 
        answer !== null && (Array.isArray(answer) ? answer.length > 0 : answer.trim() !== '')
      )
    );

    if (surveyComplete) {
      player.set(`midgameSurvey-${player.id}`, feedback);
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
        value={feedback[category][question.tag]}
        format={{ direction: question.direction }}
        setAnswer={(value, tag) => setAnswer(value, category, tag, question.type === 'ms')}
        key={`${category.title}-${question.tag}`}
      />
    );
  };

  return (
    <div className='midgame-survey'>
      <h1 className='midgame-survey-title' ref={topRef}>Midgame Survey</h1>
      <p className={`midgame-survey-blurb${failedSubmit ? ' blurb-bold' : ''}`}>
        Please answer all of the following questions.
      </p>
      <div className='questionaire'>
        {FEEDBACK_QUESTIONS.map((category, index) => (
          <React.Fragment key={`${category.title}-${index}`}>
            <h2 className='category-title'>{category.title}</h2>
            {'blurb' in category && <p>{category.blurb}</p>}
            <div className='midgame-questions'>
              {category.questions.map((question, questionIndex) => renderQuestion(question, category.title, questionIndex))}
            </div>
          </React.Fragment>
        ))}
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  );
}
