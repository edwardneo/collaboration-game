import { ClassicListenersCollector } from "@empirica/core/admin/classic";
import { OnePlayerSetups, TwoPlayerSetups, OnePlayerIntroSetup, TwoPlayerIntroSetup, Attempts } from "../../settings/Setups";
import { updateGame, goalFulfilled } from '../../settings/Utils';
import { INTROQUESTIONS } from '../../settings/IntroQuestions';
import { EXITQUESTIONS } from '../../settings/ExitQuestions';
import { FEEDBACK_QUESTIONS } from '../../settings/FeedbackQuestions';
export const Empirica = new ClassicListenersCollector();

let roundCounter = 0;
const createMazeGameRoundParams = (roundName, setup, setupIndex=-1, intro=false) => {
  params = {
    name: roundName,
    setup: setup,
    setupIndex: setupIndex,
    board: setup.board, // Mutable
    goal: setup.goal,
    capacity: setup.capacity,
    numDistinctItems: setup.board.reduce(
        (currMax, row) => row.reduce(
          (rowMax, cell) => cell.reduce(
            (cellMax, item) => Math.max(cellMax, item),
          rowMax),
        currMax),
      -1) + 1,
    intro: intro,
  }
  return params
}

Empirica.onGameStart(({ game }) => {
  // Get setups
  let introSetup = game.players.length === 1 ? OnePlayerIntroSetup : TwoPlayerIntroSetup;
  let setups = game.players.length === 1 ? OnePlayerSetups : TwoPlayerSetups;

  // Scramble setups
  setups = setups
    .map((setup, index) => ({ setup, setupIndex: index, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ setup, setupIndex }) => ({ setup, setupIndex }));

  // Store setups
  game.set('intro setup', introSetup);
  game.set('setups', setups);
  
  // Initialize score arrays
  game.players.forEach(player => {
    player.game.set('scores', []);
  })

  console.log('Creating rounds');

  // Add intro round
  round = game.addRound(createMazeGameRoundParams('Introduction Round', introSetup, -1, true));
  round.addStage({
    name: 'Maze Game',
    duration: 80,
  });

  // Add rest of rounds
  setups.forEach((setup, setupIndex) => {
    setup = setup.setup;

    if (roundCounter % 2 === 0) {
      let surveyRound = game.addRound({
        name: `Survey After ${setup.name}`,
        duration: 300,
      });
      surveyRound.addStage({
        name: 'Maze Game Survey',
        duration: 300,
      });

      console.log(`Added Maze Game Survey after ${roundName}`);
    }

    for (let i = 0; i < Attempts; i++) {
      const roundName = `Setup ${setup.name} | Attempt ${i + 1}`;
      let round = game.addRound(createMazeGameRoundParams(roundName, setup, setupIndex, false));
  
      round.addStage({
        name: 'Maze Game',
        duration: 60,
      });
      console.log(`Created ${roundName}`);
    }

    roundCounter++; // Increment round counter after each setup
  });

  console.log();
});

Empirica.onRoundStart(({ round }) => {
  console.log(`Starting ${round.get('name')}`);
  const setup = round.get('setup');

  round.currentGame.players.forEach((player, index) => {
    if (!player.round.get('position')) { // For weird Heisenbug round reset
      player.round.set('position', setup.playerPositions[index]);
      player.round.set('bag', setup.goal.map(() => 0));
      player.round.set('score', 0);
    }

    if (round.currentGame.players.length === 2) {
      player.round.set('individual goal', setup.individualGoals[index]);
    }
  });
});

Empirica.onStageStart(({ stage }) => {
  const stageName = stage.get('name')
  if (stage.get('name') === 'Maze Game') {
    console.log('Starting action');
    stage.currentGame.players.forEach(player => {
      if (player.stage !== undefined) { // For weird Heisenbug player.stage not being defined
        player.stage.set('action', null);
        player.stage.set('collect item', null);
        player.stage.set('drop item', null);
        player.stage.set('vision', false);
        player.stage.set('help', false);
      }
    });
  } else if (stageName === 'Intro End') {
    stage.currentGame.players.forEach(player => {
      player.set('questionaire', INTROQUESTIONS.reduce((obj, question) => ({...obj, [question.tag]: null}), {}))
      player.set('submit check', false)
      player.set('check complete', false)
      if (player.stage !== undefined) { // For weird Heisenbug player.stage not being defined
        player.stage.set('help', false)
      }
    })
  } else if (stage.name === 'Maze Game Survey') {
    stage.players.forEach(player => {
      player.set('survey complete', false);
    });
  }
});

Empirica.onStageEnded(({ stage }) => {
  const stageName = stage.get('name')
  if (stageName === 'Maze Game') {
    let board = stage.round.get('board');
    
    const players = stage.currentGame.players;
    const playerBags = [];

    players.forEach(player => {
      const [ newBoard, playerPos, playerBag ] = updateGame(board, player.stage.get('action'), player);

      board = newBoard;
      player.round.set('position', playerPos);
      player.round.set('bag', playerBag);
      player.round.set('score', player.round.get('score') + 1);

      playerBags.push(playerBag);
    });

    stage.round.set('board', board);

    let goalsFullfilled = (players.length === 1 && goalFulfilled(playerBags[0], stage.round.get('goal')))
      || (players.length === 2 && goalFulfilled(playerBags[0], players[0].round.get('individual goal')) &&
      goalFulfilled(playerBags[1], players[1].round.get('individual goal')) &&
      goalFulfilled(collectiveBag, stage.round.get('goal')))

    if (goalsFullfilled) {
      if (stage.round.get('name') == 'Introduction Round') {
        stage.round.addStage({
          name: `Intro End`,
          duration: 600,
        });
      } else {
        players.forEach(player => {
          const scores = [...player.game.get('scores')];
          scores.push(player.round.get('score'));
          player.game.set('scores', scores);
        })
        stage.round.addStage({ //add a new stage
          name: `Maze Game End`,
          duration: 60,
        });
      }
      console.log('Goals fulfilled')
    } else {
      stage.round.addStage({
        name: `Maze Game`,
        duration: 60,
      });
      console.log('Goals unfulfilled')
    }
    console.log('Ending action')
    console.log()
  }
});

Empirica.onRoundEnded(({ round }) => {
  console.log(`Ending ${round.get('name')}`)
});

Empirica.onGameEnded(({ game }) => { });