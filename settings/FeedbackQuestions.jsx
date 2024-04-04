export const FEEDBACK_QUESTIONS = [
  {
    'title': 'Game Understanding and Performance',
    'questions': [
      {
        question: 'Rate your agreement with the following statement: The rules of this game were easy to understand.',
        tag: 'game_rules_understanding',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'Rate your agreement with the following statement: It was easy to perform well in this game.',
        tag: 'game_performance_ease',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'If you are reading this question, please select option 1 - Strongly Disagree.',
        tag: 'attention_check',
        type: 'likert',
        direction: 'row',
      },
    ],
  },
  {
    'title': 'Strategies and Feedback',
    'questions': [
      {
        question: 'What strategies did you find successful in this game?',
        tag: 'successful_strategies',
        type: 'fr',
      },
      {
        question: 'What strategies did you find unsuccessful in this game?',
        tag: 'unsuccessful_strategies',
        type: 'fr',
      },
      {
        question: 'What feedback do you have for the game?',
        tag: 'game_feedback',
        type: 'fr',
      },
      {
        question: 'Please provide a concise description of your approach to the game.',
        tag: 'game_approach_description',
        type: 'fr',
      },
    ],
  },
  {
    'title': 'Gameplay Strategies and Advice',
    'questions': [
      {
        question: 'Please select the strategy or strategies that best align with your approach to navigating the maze:',
        tag: 'maze_navigation_strategy',
        type: 'ms',
        choices: [
          'Optimal Strategy: Prioritize speed and efficiency in navigating the maze.',
          'Explorer Strategy: Prioritize discovering the layout of the maze over reaching goals quickly.',
          'Conservative Strategy: Prioritize safe and familiar routes, avoiding exploration or deviation.',
          'Roamer Strategy: Frequently changing directions, reversing decisions, and using various strategies.',
          'Adapter Strategy: Players adapt their strategies based on the evolving game dynamics.'
        ],
        direction: 'column',
      },
      {
        question: 'Which type of advice do you believe would most effectively improve your score?',
        tag: 'effective_advice',
        type: 'mc',
        choices: [
          'Recommendations for the next optimal action',
          'Clear and specific information about the locations of objectives or resources',
        ],
        direction: 'row',
      },
    ],
  },
  {
    'title': 'Collaboration and Problem-Solving',
    'blurb': 'Consider a scenario where you are collaborating with another player in this game, sharing both individual and collective goals.',
    'questions': [
      {
        question: 'What information would you consider most critical to share with your partner in a collaborative gameplay scenario?',
        tag: 'collaborative_information_sharing',
        type: 'fr',
      },
      {
        question: 'When approaching problem-solving in a collaborative setting, which strategy do you prefer?',
        tag: 'collaborative_problem_solving',
        type: 'mc',
        choices: [
          'Divide and Conquer: Each player focuses on different objectives.',
          'Tackle Together: Focus on completing tasks as a duo.',
          'Flexible Approach Based on Scenario: Adapt strategy based on current needs.'
        ],
        direction: 'column',
      },
      {
        question: 'When prioritizing goals in a collaborative setting, which approach do you prefer?',
        tag: 'collaborative_goal_prioritization',
        type: 'mc',
        choices: [
          'Equal Priority for Individual and Collaborative Goals.',
          'Higher Priority for Collaborative Goals.',
          'Higher Priority for Individual Goals.'
        ],
        direction: 'column',
      },
    ],
  },
];
