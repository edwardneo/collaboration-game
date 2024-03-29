import React from 'react'
import {
	usePlayer,
} from '@empirica/core/player/classic/react'
import { useDrop } from 'react-dnd'

import '../css/CellDropTarget.css'

export function CellDropTarget({ row, col, children }) {
	const player = usePlayer()

	const movePlayer = () => {
		player.stage.set('action', { 'type': 'move', 'position': [row, col] })
    player.stage.set('collect item', null)
    player.stage.set('drop item', null)
	}

	const [{ isOver, canDrop }, drop] = useDrop(
		() => ({
			accept: 'player',
			drop: movePlayer,
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[],
	)

	return (
		<div
			className='cell-drop-target'
			ref={drop}
		>
			{canDrop && !isOver && <div className='highlight-possible' />}
			{canDrop && isOver && <div className='highlight-hover' />}
			{children}
		</div>
	)
}