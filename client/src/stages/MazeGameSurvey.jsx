import React from 'react'
import {
  usePlayer,
} from '@empirica/core/player/classic/react'

import '../css/MazeGameSurvey.css'
import { Button } from '../components/Button'
import { MidgameQuestionaire } from '../components/MidgameQuestionaire'
import { HelpButton, HelpPopup } from '../components/HelpPopup'

export function MazeGameSurvey() {
  const player = usePlayer()
  const checkComplete = player.get('check complete')
  
  return (
    <div className='game maze-game-survey'>
      <p>
        {'Congratulation! Please complete the following survey to continue the maze game.'}
      </p>
      <br />
      <MidgameQuestionaire checkComplete={checkComplete} />
      {
        checkComplete ? 
        <>
          <p className='start-label'>{'Thank you for completing the survey! You may now proceed.'}</p>
          <Button primary handleClick={() => player.stage.set('submit', true)}>
				<p>Continue</p>
			    </Button>
        </> :
        null
      }
      <HelpButton />
      {player.stage.get('help') ? <HelpPopup /> : null}
    </div>
  )
}
