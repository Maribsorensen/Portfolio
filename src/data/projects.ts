export const projects = [
  {
    id: 'CSS Frameworks',
    title: 'Blikk',
    teaser:
      'CSS Frameworks assignment. A online social platform where users can manage their profile and posts, comment and view other users posts.',
    description:
      'This project was created for two different assignments for Noroff front end development year 2. This was first a javascropt level 2 assignment where I had to build on already mostly finished code, as well as setup tests with vitest. Later in the CSS Frameworks course we had to add on tailwind styling to that project.',
    techstack: {
      frontend: 'vite, html, javascript',
      styling: 'tailwind CSS',
      routing: 'custom client-side router',
      notifications: 'tailwindflex prebuilt toaster',
      testing: 'vitest',
    },
    image: '../src/assets/blikk.png',
    alt: 'Screenshot of the Blikk project website',
    links: {
      github: 'https://github.com/Maribsorensen/CSS-Frameworks-Public',
      live: 'https://css-frameworks-blikk.netlify.app/',
    },
  },
  {
    id: 'Javascript Frameworks',
    title: 'LoopCart',
    teaser:
      'Javascript Frameworks assignment. Full featured online store built with react.',
    description:
      'This project was created as a javascript frameworks assignment for Noroff frontend development year 2. The project is a full featured online store with product pages, cart, a checkout success and a contact page.',
    features: {
      search: 'Lookahead/auto-complete search bar component',
      router: 'React router setup',
    },
    techstack: {
      frontend: 'vite, react, typescript, html',
      styling: 'tailwind CSS',
      routing: 'react router',
      state: 'zustand',
      forms: 'react hook form',
      icons: 'react icons',
      notifications: 'react hot toast',
    },
    image: '../src/assets/loopcart.png',
    alt: 'Screenshot of the Loopcart project website',
    links: {
      github: 'https://github.com/Maribsorensen/javascript-frameworks-ca',
      live: 'https://loopcart-ca.netlify.app/',
    },
  },
  {
    id: 'Semester Project 2',
    title: 'Bidly',
    teaser:
      'Semester Project year 2. This is a auction site where users can list and bid on items, as well as manage their account.',
    description:
      'This project was created for the semester project year 2 at Noroff frontend development class. The project is a auction and bidding website, where users can list and bid on items as well as manage their account. ',
    techstack: {
      frontend: 'vite, html, javascript',
      styling: 'tailwind CSS',
      routing: 'custom client-side router',
      notifications: 'tailwindflex prebuilt toaster',
    },
    image: '../src/assets/Bidly skjermbilde.png',
    alt: 'Screenshot of the Bidly project website',
    links: {
      github: 'https://github.com/Maribsorensen/SP2-Bidly',
      live: 'https://sp2-bidly.netlify.app/',
    },
  },
];
