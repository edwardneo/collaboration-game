import React from 'react'
import {
  usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/MazeGameSurvey.css'
import { Button } from '../components/Button'
import { Questionaire } from '../components/Questionaire'
import { HelpButton, HelpPopup } from '../components/HelpPopup'

export function MazeGameSurvey() {
  const player = usePlayer()

  const surveyComplete = player.get('survey complete')
  
  return (
    <div className='game maze-game-survey'>
      <p>
        {'Congratulation! Please complete the following survey to continue the maze game.'}
      </p>
      <br />
      <Questionaire surveyComplete={surveyComplete} />
      {
        surveyComplete ? 
        <>
          <p className='start-label'>{'Thank you for completing the survey! You may now proceed.'}</p>
          <Button className='maze-game-survey-btn' primary handleClick={() => player.stage.set('submit', true)}>
            <p>Finish</p>
          </Button>
        </> :
        null
      }
      <HelpButton />
      {player.stage.get('help') ? <HelpPopup /> : null}
    </div>
  )
}
