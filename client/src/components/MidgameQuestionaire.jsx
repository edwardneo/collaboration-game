import React from 'react';
import { usePlayer } from '@empirica/core/player/classic/react';
import { FEEDBACK_QUESTIONS } from '../../../settings/FeedbackQuestions';
import { Button } from '../components/Button';
import { Question } from './Question';
import '../css/Questionaire.css';

export function MidgameQuestionaire({ next }) {
  const player = usePlayer();
  const feedback = player.get('midgameFeedback') || {};

  // Initialize feedback if it's not present
  if (Object.keys(feedback).length === 0) {
    FEEDBACK_QUESTIONS.forEach((category) => {
      category.questions.forEach((question) => {
        feedback[`${category.title}_${question.tag}`] = null;
      });
    });
    player.set('midgameFeedback', feedback);
  }

  const setAnswer = (value, category, tag) => {
    const feedbackKey = `${category}_${tag}`;
    const updatedFeedback = { ...feedback, [feedbackKey]: value };
    player.set('midgameFeedback', updatedFeedback);
  };

  const submitCheck = () => {
    player.set('midgameSubmitted', true);
    const allAnswered = FEEDBACK_QUESTIONS.every((category) =>
      category.questions.every((question) => {
        const feedbackKey = `${category.title}_${question.tag}`;
        const answer = feedback[feedbackKey];
        return answer !== null && (Array.isArray(answer) ? answer.length > 0 : answer.trim() !== '');
      })
    );

    if (allAnswered) {
      player.set('midgameComplete', true);
      next(); // Proceed to the next stage if all questions are answered
    }
  };

  const submitted = player.get('midgameSubmitted');

  return (
    <div className='questionaire'>
      <h1 className='questionaire-title'>Midgame Questionnaire</h1>
      <div className='questions'>
        {FEEDBACK_QUESTIONS.map((category) => (
          <React.Fragment key={category.title}>
            <h2 className='category-title'>{category.title}</h2>
            {category.questions.map((question, index) => (
              <Question
                question={question.question}
                type={question.type}
                tag={question.tag}
                choices={question.choices}
                value={feedback[`${category.title}_${question.tag}`]}
                format={{ direction: question.direction, disabled: submitted }}
                setAnswer={(value) => setAnswer(value, category.title, question.tag)}
                key={index}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      {!submitted && (
        <Button className='intro-submit-btn' primary handleClick={submitCheck}>
          <p>Submit</p>
        </Button>
      )}
    </div>
  );
}
