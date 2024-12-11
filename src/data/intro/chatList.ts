export default [
  {
    image: '/avatars/svg/unt-logo.svg',
    name: '🤖 UNT Welcome Bot',
    status: 'online',
    textList: [
      {
        text: `
          🤖 Welcome!

          This is a capstone project from [Nathan Smith](https://linkedin.com/in/nathan).

          He created this demo as a student at the University of North Texas, while working on an [MA in interaction design](https://cvad.unt.edu/design/design-ma-ixd).

          Feel free to click around. Maybe start with the soccer ball icon.
        `,
      },
      {
        text: `
          Also, you can peruse the code on GitHub.

          https://github.com/nathansmith/fake-teams-app
        `,
        reactions: [
          {
            count: 2,
            emoji: '🎓',
          },
          {
            count: 1,
            emoji: '✅',
          },
        ],
      },
    ],
  },
  {
    isSelf: true,
    image: '/avatars/webp/soccer-player.webp',
    name: 'User Name',
    textList: [
      {
        text: `
          Wow, that sounds cool. I will take a look.

          Let's gooo!
        `,
        reactions: [
          {
            count: 2,
            emoji: '🎉',
          },
          {
            count: 1,
            emoji: '😎',
          },
        ],
      },
    ],
  },
];
