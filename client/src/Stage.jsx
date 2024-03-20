import {
	usePlayer,
	usePlayers,
	useStage,
} from '@empirica/core/player/classic/react'
import { Loading } from '@empirica/core/player/react'
import React from 'react'

import { MazeGame } from './stages/MazeGame'
import { IntroEnd } from './stages/IntroEnd'
import { MazeGameSurvey } from './stages/MazeGameSurvey';
import { MazeGameEnd } from './stages/MazeGameEnd'

import './css/Stage.css'

export function Stage() {
	const player = usePlayer()
	const players = usePlayers()
	const stage = useStage()

	if (player.stage.get('submit')) {
		if (players.length === 1) {
			return <Loading />
		}

		return (
			<div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
			</div>
		)
	}

	switch (stage.get('name')) {
	case 'Maze Game':
      return <MazeGame />;
    case 'Maze Game Survey':
      return <MazeGameSurvey />;
    case 'Maze Game End':
      return <MazeGameEnd />;  
  case 'Intro End':
    return <IntroEnd />
	}
}
