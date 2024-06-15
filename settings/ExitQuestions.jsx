export const EXITQUESTIONS = [
  {
    title: 'General Feedback',
    questions: [
      {
        question: 'Rate your agreement with the following statement: The rules of this game were easy to understand.',
        tag: 'rules',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'Rate your agreement with the following statement: It was easy to perform well in this game.',
        tag: 'performance',
        type: 'likert',
        direction: 'row',
      },
      {
        question: 'What strategies did you find successful in this game?',
        tag: 'success',
        type: 'fr',
      },
      {
        question: 'What strategies did you find unsuccessful in this game?',
        tag: 'failure',
        type: 'fr',
      },
      {
        question: 'What feedback do you have for the game?',
        tag: 'feedback',
        type: 'fr',
      },
      {
        question: 'If you are reading this question, please select option 1 - Strongly Disagree.',
        tag: 'sanity',
        type: 'likert',
        direction: 'row',
      }
    ],
  },
  // {
  //   title: 'Strategy and Advice -- First Two Rounds',
  //   questions: [
  //     {
  //       question: "How did you approach playing this specific board? What plans or methods did you employ while playing?",
  //       tag: "gameplay-description",
  //       type: "fr"
  //     },
  //     {
  //       question: "If you were to give one piece of advice to another player about this board, what would it be?",
  //       tag: "advice",
  //       type: "fr"
  //     },
  //     {
  //       question: "On a scale from 1 to 7, please select the option that best describes your approach to playing the game (1- Explorer, 7- Conservative):\n\n1: Explorer: I like to explore new directions on the board, even if I've found a good strategy already.\n7: Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before.",
  //       tag: "strategy-preference",
  //       type: "seven"
  //     },
  //     {
  //       question: "Which strategy do you think is the most effective for this board?",
  //       tag: "strategy-effectiveness",
  //       type: "mc",
  //       choices: [
  //         "Explorer: I like to explore new directions on the board, even if I've found a good strategy already.",
  //         "Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before."
  //       ],
  //       direction: "column"
  //     },
  //     {
  //       question: "How did your strategy change for the second attempt of this board?",
  //       tag: "strategy-change",
  //       type: "fr"
  //     },
  //     {
  //       question: "What strategies can be applied for all boards throughout this Maze Game?",
  //       tag: "universal-strategies",
  //       type: "fr"
  //     },
  //     {
  //       question: "Which type of advice do you believe would most effectively improve your score?",
  //       tag: "effective-advice",
  //       type: "mc",
  //       choices: [
  //         "Recommendations for the next optimal action",
  //         "Clear and specific information about the locations of objectives or resources"
  //       ],
  //       direction: "row"
  //     }
  //   ],
  // },
  // {
  //   title: 'Strategy and Advice -- Second Two Rounds',
  //   questions: [
  //   {
  //     question: "How did you approach playing this specific board? What plans or methods did you employ while playing?",
  //     tag: "gameplay-description",
  //     type: "fr"
  //   },
  //   {
  //     question: "If you were to give one piece of advice to another player about this board, what would it be?",
  //     tag: "advice",
  //     type: "fr"
  //   },
  //   {
  //     question: "On a scale from 1 to 7, please select the option that best describes your approach to playing the game (1- Explorer, 7- Conservative):\n\n1: Explorer: I like to explore new directions on the board, even if I've found a good strategy already.\n7: Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before.",
  //     tag: "strategy-preference",
  //     type: "seven"
  //   },
  //   {
  //     question: "Which strategy do you think is the most effective for this board?",
  //     tag: "strategy-effectiveness",
  //     type: "mc",
  //     choices: [
  //       "Explorer: I like to explore new directions on the board, even if I've found a good strategy already.",
  //       "Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before."
  //     ],
  //     direction: "column"
  //   },
  //   {
  //     question: "How did your strategy change for the second attempt of this board?",
  //     tag: "strategy-change",
  //     type: "fr"
  //   },
  //   {
  //     question: "What strategies can be applied for all boards throughout this Maze Game?",
  //     tag: "universal-strategies",
  //     type: "fr"
  //   },
  //   {
  //     question: "Which type of advice do you believe would most effectively improve your score?",
  //     tag: "effective-advice",
  //     type: "mc",
  //     choices: [
  //       "Recommendations for the next optimal action",
  //       "Clear and specific information about the locations of objectives or resources"
  //     ],
  //     direction: "row"
  //   }
  //   ],
  // },
  // {
  //   title: "Strategy and Advice -- Last Two Rounds",
  //   questions: [
  //   {
  //     question: "How did you approach playing this specific board? What plans or methods did you employ while playing?",
  //     tag: "gameplay-description",
  //     type: "fr"
  //   },
  //   {
  //     question: "If you were to give one piece of advice to another player about this board, what would it be?",
  //     tag: "advice",
  //     type: "fr"
  //   },
  //   {
  //     question: "On a scale from 1 to 7, please select the option that best describes your approach to playing the game (1- Explorer, 7- Conservative):\n\n1: Explorer: I like to explore new directions on the board, even if I've found a good strategy already.\n7: Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before.",
  //     tag: "strategy-preference",
  //     type: "seven"
  //   },
  //   {
  //     question: "Which strategy do you think is the most effective for this board?",
  //     tag: "strategy-effectiveness",
  //     type: "mc",
  //     choices: [
  //       "Explorer: I like to explore new directions on the board, even if I've found a good strategy already.",
  //       "Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before."
  //     ],
  //     direction: "column"
  //   },
  //   {
  //     question: "How did your strategy change for the second attempt of this board?",
  //     tag: "strategy-change",
  //     type: "fr"
  //   },
  //   {
  //     question: "What strategies can be applied for all boards throughout this Maze Game?",
  //     tag: "universal-strategies",
  //     type: "fr"
  //   },
  //   {
  //     question: "Which type of advice do you believe would most effectively improve your score?",
  //     tag: "effective-advice",
  //     type: "mc",
  //     choices: [
  //       "Recommendations for the next optimal action",
  //       "Clear and specific information about the locations of objectives or resources"
  //     ],
  //     direction: "row"
  //   }
  //   ],
  // },
  {
    title: 'Collaboration',
    blurb: 'Collaborative Gameplay Scenario: Imagine a scenario where you are paired with another player to play this game. Both of you have individual goals as well as shared goals, aiming to minimize the total number of steps taken. Assume that communication comes at a cost (lose turns for action).',
    questions: [
      {
        question: 'What information would you consider most critical to share with your partner?',
        tag: 'communication',
        type: 'fr'
      },
      {
        question: 'When approaching problem-solving in a collaborative setting, which strategy do you prefer?',
        tag: 'colab-strategy',
        type: 'mc',
        choices: [
          'Divide and Conquer: Each player focuses on different objectives; efficient but risks failure if one player cannot complete their tasks.',
          'Tackle Together: Focus on completing tasks as a duo; fosters teamwork but may increase the total number of steps taken.',
          'Flexible Approach Based on Scenario: Adapt strategy based on current needs; versatile but requires good judgment and communication.'
        ],
        direction: 'column'
      },
      {
        question: 'When prioritizing goals in a collaborative setting, which approach do you prefer?',
        tag: 'priority-approach',
        type: 'mc',
        choices: [
          'Equal Priority for Individual and Collaborative Goals: Ensures balanced effort towards all objectives but may lead to inefficiencies if one set of goals requires more resources than the other.',
          'Higher Priority for Collaborative Goals: Maximizes the benefit to the team and possibly the overall score, but individual goals might be neglected, potentially affecting personal scores or achievements.',
          'Higher Priority for Individual Goals: Focuses on personal achievements, which could lead to a higher individual score but may compromise the team\'s efficiency and overall success.'
        ],
        direction: 'column'
      },
      {
        question: 'What challenges do you expect to arise when working with an Explorer type partner?',
        tag: 'challenges-approach',
        type: 'fr'
      },
      {
        question: 'What challenges do you expect to arise when working with a Conservative type partner?',
        tag: 'challenges-approach',
        type: 'fr'
      },
    ],
  },
  {
    'title': 'Collaboration-Team',
    'blurb': 'Answer the following questions in the scale from 1 to 7',
    'questions': [
      {
        question: `Who would you prefer as a teammate? (1- Explorer, 7- Conservative)
        
        1. Explorer: I like to explore new directions on the board, even if I've found a good strategy already;
        
        7. Conservative: Once I've found a good strategy, I stick with it and go after pieces I need, even if I've been in that area before.`,
        tag: 'strategy',
        type: 'seven'
      },
      
      {
        question: `When working together to solve problems, which method do you prefer? (1- Divide and Conquer, 7- Tackle Together)
        
        1. Divide and Conquer: Each person works on different tasks, which is efficient but risky if one person can't finish;
        
        7. Tackle Together: Work as a pair to finish tasks, promotes teamwork but might take more steps.`,
        tag: 'problem-solving',
        type: 'seven'
      },
      
      {
        question: `Who would you prefer as a teammate? (1- Divide and Conquer, 7- Tackle Together)
        
        1. Divide and Conquer: Each person works on different tasks, which is efficient but risky if one person can't finish;
        
        7. Tackle Together: Work as a pair to finish tasks, promotes teamwork but might take more steps.`,
        tag: 'teamwork',
        type: 'seven'
      },
      
      {
        question: `If you are reading this question, please select option 7- Tackle Together
        
        1. Divide and Conquer: Each person works on different tasks, which is efficient but risky if one person can't finish;
        
        7. Tackle Together: Work as a pair to finish tasks, promotes teamwork but might take more steps.`,
        tag: 'compliance',
        type: 'seven'
      },
      
      {
        question: `When deciding on goals in a group setting, which would you do? (1- Team Priority, 7- Personal Priority)
        
        1. Team Priority: Focus on group goals for maximum benefit, but individual goals might suffer;
        
        7. Personal Priority: Focus on individual goals for personal achievement, but it might harm team success.`,
        tag: 'goal-setting',
        type: 'seven'
      },
      
      {
        question: `Who would you prefer as a teammate? (1- Team Priority, 7- Personal Priority)
        
        1. Team Priority: Focus on group goals for maximum benefit, but individual goals might suffer;
        
        7. Personal Priority: Focus on individual goals for personal achievement, but it might harm team success.`,
        tag: 'team-preference',
        type: 'seven'
      }
    ]
  }
]