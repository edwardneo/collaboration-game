export const OnePlayerSetups = [
  {
    name: 'Oak',
    goal: [1, 0, 0, 0],
    board: [
      [[ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [2], [1], [ ], [ ]],
      [[ ], [ ], [ ], [1], [2], [ ]],
      [[ ], [3], [ ], [0], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [ ], [1], [1], [ ]],
    ],
    playerPositions: [[4, 3]],
    capacity: 7,
  },
  {
    name: 'Birch',
    goal: [1, 0, 0, 0],
    board: [
      [[ ], [ ], [0], [2], [1], [ ]],
      [[ ], [ ], [ ], [1], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [3], [ ], [2], [2]],
      [[ ], [1], [0], [ ], [1], [ ]],
      [[ ], [ ], [1], [0], [ ], [ ]],
    ],
    playerPositions: [[4, 0]],
    capacity: 10,
  },
  {
    name: 'Pine',
    goal: [1, 0, 0, 0],
    board: [
      [[ ], [0], [0], [ ], [ ], [0]],
      [[0], [ ], [3], [ ], [1], [ ]],
      [[ ], [3], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [0], [ ], [2], [ ]],
      [[ ], [ ], [ ], [2], [ ], [ ]],
      [[ ], [ ], [2], [ ], [ ], [ ]],
    ],
    playerPositions: [[2, 3]],
    capacity: 8,
  },
];

export const TwoPlayerSetups = [
  {
    goal: [7, 3, 5],
    individualGoals: [[4, 0, 3], [3, 3, 2]],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 0], [0, 5]],
    capacity: 10,
  },
];

export const OnePlayerIntroSetup = {
  name: 'Intro',
  goal: [1, 2, 1],
  board: [
    [[ ], [ ], [ ], [ ], [ ], [2]],
    [[ ], [ ], [ ], [ ], [ ], [ ]],
    [[ ], [ ], [ ], [ ], [ ], [ ]],
    [[ ], [ ], [0], [ ], [ ], [ ]],
    [[ ], [ ], [1], [1], [ ], [ ]],
    [[ ], [ ], [ ], [ ], [ ], [ ]],
  ],
  playerPositions: [[2, 2]],
  capacity: 4,
}

export const TwoPlayerIntroSetup = { // Not actually an intro setup currently
  name: 'Intro',
  goal: [7, 3, 5],
    individualGoals: [[1, 2, 3], [2, 3, 4]],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 1], [0, 5]],
    capacity: 10,
}

export const OnePlayerTestSetups = [
  {
    goal: [7, 3, 5],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 0]],
    capacity: 10,
  },
  {
    goal: [7, 3, 5, 0, 0],
    board: [
      [[1, 2, 3, 4], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 1]],
    capacity: 1,
  },
  {
    goal: [1, 0, 0],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 1]],
    capacity: 10,
  },
  {
    goal: [1, 2, 2],
    board: [
      [[ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [2], [1], [ ], [ ], [ ]],
      [[ ], [ ], [0], [2], [ ], [ ]],
      [[ ], [ ], [1], [ ], [1], [1]],
      [[ ], [ ], [ ], [ ], [2], [ ]],
      [[ ], [ ], [2], [0], [ ], [ ]],
    ],
    playerPositions: [[4, 2]],
    capacity: 10,
  },
  {
    goal: [1, 2, 2],
    board: [
      [[ ], [ ], [0], [1], [2], [ ]],
      [[ ], [ ], [ ], [2], [ ], [ ]],
      [[ ], [ ], [ ], [ ], [ ], [ ]],
      [[ ], [ ], [1], [ ], [1], [1]],
      [[ ], [ ], [ ], [ ], [2], [ ]],
      [[ ], [ ], [2], [0], [ ], [ ]],
    ],
    playerPositions: [[4, 2]],
    capacity: 10,
  },
];

export const TwoPlayerTestSetups = [
  {
    goal: [7, 3, 5],
    individualGoals: [[1, 2, 3], [2, 3, 4]],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 1], [0, 5]],
    capacity: 10,
  },
  {
    goal: [7, 3, 5, 0, 0],
    individualGoals: [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]],
    board: [
      [[1, 2, 3, 4], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 1], [1, 5]],
    capacity: 1,
  },
  {
    goal: [2, 0, 0],
    individualGoals: [[2, 0, 0], [1, 0, 0]],
    board: [
      [[1], [ ], [2], [0], [0], [ ]],
      [[1], [2], [ ], [0], [0], [0]],
      [[2], [ ], [2], [0], [0], [0]],
      [[0], [0], [0], [2], [ ], [2]],
      [[0], [0], [0], [ ], [ ], [1]],
      [[ ], [0], [0], [2], [1], [1]],
    ],
    playerPositions: [[5, 0], [0, 5]],
    capacity: 10,
  },
];

export const Attempts = 1;