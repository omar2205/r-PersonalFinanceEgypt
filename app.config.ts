export default defineAppConfig({
  docus: {
    title: 'PersonalFinanceEgypt',
    description: 'Discuss: budgeting, investing, saving, banking services, and all-around personal finance in Egypt',
    image: 'https://styles.redditmedia.com/t5_355hu6/styles/communityIcon_86c829tj3se81.jpeg?width=256&s=7fb10cca8814eb127d175c650438c4d45a8f4cd1',
    socials: {
      github: 'omar2205/r-PersonalFinanceEgypt',
      // @ts-ignore
      reddit: {
        label: 'Reddit',
        icon: 'simple-icons:reddit',
        href: 'https://www.reddit.com/r/PersonalFinanceEgypt'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'r-PersonalFinanceEgypt',
      owner: 'omar2205',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        text: 'Powered by Docus and compiled by u/darkening_twilight',
        icon: '',
        href: ''
      }
    }
  }
})
