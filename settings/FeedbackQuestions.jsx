export const FEEDBACK_QUESTIONS = [
  {
    'title': 'Open-Ended Feedback',
    'questions': [
      {
        question: 'What strategies did you use during your gameplay?',
        tag: 'gameplay_strategies',
        type: 'fr',
      },
      {
        question: 'If you were to offer advice to another player, what single piece of guidance would you give based on your experience?',
        tag: 'player_advice',
        type: 'fr',
      },
    ],
  },
  {
    'title': 'Multiple Choice [Select all that apply]',
    'questions': [
      {
        question: 'Which of the following strategies do you think works well in the game? (Check all that apply)',
        tag: 'effective_strategies',
        type: 'ms',
        choices: [
          "Explorers: Focus on uncovering the maze's layout rather than swiftly reaching objectives.",
          'Conservatives: Emphasize sticking to secure and familiar paths, steering clear of exploration or deviation.',
          'Adapters: Adjust strategies according to the changing game dynamics, demonstrating flexibility in decision-making.'
        ],
        direction: 'column',
      },
    ],
  },
  {
    'title': 'Multiple Choice [Select one option]',
    'questions': [
      {
        question: 'Which strategy do you think is the most effective?',
        tag: 'most_effective_strategy',
        type: 'mc',
        choices: [
          "Explorers: Focus on uncovering the maze's layout rather than swiftly reaching objectives.",
          'Conservatives: Emphasize sticking to secure and familiar paths, steering clear of exploration or deviation.',
          'Adapters: Adjust strategies according to the changing game dynamics, demonstrating flexibility in decision-making.'
        ],
        direction: 'column',
      },
    ],
  },
];
