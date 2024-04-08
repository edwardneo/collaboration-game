export const FEEDBACK_QUESTIONS = [
  {
    'title': 'Open-Ended Feedback',
    'questions': [
      {
        'question': 'What strategies did you use during your gameplay?',
        'tag': 'gameplay_strategies',
        'type': 'fr',
      },
      {
        'question': 'If you were to offer advice to another player, what single piece of guidance would you give based on your experience?',
        'tag': 'player_advice',
        'type': 'fr',
      },
    ],
  },
  {
    'title': 'Strategy Effectiveness - Multiple Choice [Select all that apply]',
    'instructions': 'Among the following strategies, which ones do you believe are effective? Check all that apply.',
    'questions': [
      {
        'question': '',
        'tag': 'effective_strategies',
        'type': 'ms',
        'choices': [
          'Explorers: Prioritize discovering the layout of the maze over reaching goals quickly.',
          'Conservatives: Prioritize safe and familiar routes, avoiding exploration or deviation.',
          'Adapters: Players adapt their strategies based on the evolving game dynamics, displaying flexibility in decision-making.',
        ],
        'direction': 'column',
      },
    ],
  },
  {
    'title': 'Most Effective Strategy - Multiple Choice [Select one option]',
    'instructions': 'Which of the following strategies do you believe is the most effective?',
    'questions': [
      {
        'question': '',
        'tag': 'most_effective_strategy',
        'type': 'mc',
        'choices': [
          'Explorers: Prioritize discovering the layout of the maze over reaching goals quickly.',
          'Conservatives: Prioritize safe and familiar routes, avoiding exploration or deviation.',
          'Adapters: Players adapt their strategies based on the evolving game dynamics, displaying flexibility in decision-making.',
        ],
        'direction': 'column',
      },
    ],
  },
];
