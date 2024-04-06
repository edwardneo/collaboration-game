import { usePlayer } from '@empirica/core/player/classic/react';
import React, { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { FEEDBACK_QUESTIONS } from '../../../settings/FeedbackQuestions';

import '../css/Questionaire.css'
import '../css/MazeGameSurvey.css';

export function MidgameSurvey({ next }) {
	const player = usePlayer()
  const [ feedback, setFeedback ] = useState(FEEDBACK_QUESTIONS.reduce(
    (obj, category) => ({...obj, [category.title]: category.questions.reduce(
      (obj, question) => ({...obj, [question.tag]: null}),
      {})}),
    {}
  ))
  const [ failedSubmit, setFailedSubmit ] = useState(false)
  const topRef = useRef(null)

  const setAnswer = (value, category, tag, multiselect=false) => {
    const feedbackCopy = {...feedback}

    if (multiselect) {
      const target = value
      if (feedbackCopy[category][tag] === null) {
        feedbackCopy[category][tag] = []
      }

      if (target.checked) {
        feedbackCopy[category][tag].push(target.value)
        feedbackCopy[category][tag].sort()
      } else {
        feedbackCopy[category][tag] = feedbackCopy[category][tag].filter(e => e != target.value)
      }
    } else {
      feedbackCopy[category][tag] = value
    }
    
    setFeedback(feedbackCopy)
  }

	const handleSubmit = event => {
		event.preventDefault()
    const surveyComplete = Object.values(feedback).every(category => Object.values(category).every(answer => answer !== null && (Array.isArray(answer) ? answer.length !== 0 : answer.trim() !== '')))
    if (surveyComplete) {
      player.set('midgameSurvey', feedback)
      next()
    } else {
      topRef.current.scrollIntoView({ behavior: "smooth" })
      setFailedSubmit(true)
    }
	}

  const renderQuestion = (question, category, questionNum) => {
    if (question.type == 'mc' || question.type == 'likert' || question.type == 'ms') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          num={questionNum}
          choices={question.choices}
          value={feedback[category][question.tag]}
          format={{ direction: question.direction }}
          setAnswer={(value, tag) => setAnswer(value, category, tag, question.type == 'ms')}
          key={`${question.tag}`}
        />
      )
    } else if (question.type == 'fr') {
      return (
        <Question
          question={question.question}
          type={question.type}
          tag={question.tag}
          value={feedback[category][question.tag]}
          format={{ direction: question.direction }}
          setAnswer={(value, tag) => setAnswer(value, category, tag)}
          key={`${question.tag}`}
        />
      )
    }
  }

  return (
    <div className='midgame-survey'>
      <h1 className='midgame-survey-title' ref={topRef}>Exit Survey</h1>
      <p className={`midgame-survey-blurb${ failedSubmit ? ' blurb-bold' : ''}`}>Please answer all of the following questions.</p>
      <div className='questionaire'>
        {
          EXITQUESTIONS.map(category => (
            <>
              <h2 className='category-title' key={`${category.title}`}>{category.title}</h2>
              {
                'blurb' in category ?
                <p>{category.blurb}</p> :
                null
              }
              <div className='midgame-questions' key={`${category.title} questions`}>{category.questions.map((question, index) => renderQuestion(question, category.title, index))}</div>
            </>
          ))
        }
        <Button className='intro-submit-btn' primary handleClick={handleSubmit}>
          <p>Submit</p>
        </Button>
      </div>
    </div>
  )
}
