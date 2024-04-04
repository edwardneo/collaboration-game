import React, { useState } from 'react';
import { usePlayer } from '@empirica/core/player/classic/react';

import { FEEDBACK_QUESTIONS } from '../../../settings/FeedbackQuestions'; // Adjust the import path as necessary
import { Button } from './Button';
import { Question } from './Question';

import '../css/Questionaire.css';

export function MidgameQuestionaire({ next }) {
  const player = usePlayer();
  const [feedback, setFeedback] = useState(FEEDBACK_QUESTIONS.reduce(
    (obj, category) => ({...obj, [category.title]: category.questions.reduce(
      (obj, question) => ({...obj, [question.tag]: null}),
      {})}),
    {}
  ));
  const [failedSubmit, setFailedSubmit] = useState(false);

  const setAnswer = (value, category, tag, multiselect = false) => {
    const feedbackCopy = {...feedback};

    if (multiselect) {
      if (feedbackCopy[category][tag] === null) {
        feedbackCopy[category][tag] = [];
      }

      const index = feedbackCopy[category][tag].indexOf(value);
      if (index === -1) {
        feedbackCopy[category][tag].push(value);
      } else {
        feedbackCopy[category][tag].splice(index, 1);
      }
    } else {
      feedbackCopy[category][tag] = value;
    }

    setFeedback(feedbackCopy);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const surveyComplete = Object.values(feedback).every(category => 
      Object.values(category).every(answer => answer !== null && (Array.isArray(answer) ? answer.length > 0 : answer.trim() !== ''))
    );
    if (surveyComplete) {
      player.set('midgameSurvey', feedback);
      next();
    } else {
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
        key={`${category}-${question.tag}`}
      />
    );
  };

  return (
    <div className='midgame-questionaire'>
      <h1 className='questionaire-title'>Midgame Questionnaire</h1>
      {failedSubmit && <p className='error-message'>Please answer all the questions before submitting.</p>}
      <div className='questionaire-content'>
        {FEEDBACK_QUESTIONS.map((category) => (
          <div key={category.title}>
            <h2 className='category-title'>{category.title}</h2>
            {category.questions.map((question, index) => renderQuestion(question, category.title, index))}
          </div>
        ))}
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  );
}
