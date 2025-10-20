// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ayoub63', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ayoub63/RAG-Assistant', 'ayoub63/airline-satisfaction', 'TaqiyyuddinAsad/pizza-dashboard', 'ayoub63/AppTesting-Demo'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
  },
  seo: { title: 'Portfolio of Ayoub Afkir', description: '', imageURL: '' },
  social: {
    github: 'ayoub63',
    linkedin: 'ayoub-afk',
    email: 'ayoubafkir18@gmail.com',
  },
  resume: {
    fileUrl:
      'public/CVo.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'Tailwind',
  ],
  
  educations: [
    {
      institution: 'Heinrich-Mann-Schule',
      degree: 'Allgemeine Hochschulreife',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Frankfurt University of Applied Sciences',
      degree: 'Bachelor of Science Wirtschaftsinformatik',
      from: '2023',
      to: 'Jetzt',
    },
  ],
  publications: [
    {
      title: 'Feature Selection in Practice: Evaluating Methods Across Models',
      conferenceName: 'Frankfurt UAS',
      authors: 'Asad Taqiyyuddin, Ayoub Afkir, Adam Ibrahimkhel',
      link: 'https://docs.google.com/document/d/1XWUaBXZq2VQX4FBkQAm_vnc3wHLh_JI2/edit?usp=sharing&ouid=117481358865129615266&rtpof=true&sd=true',
      description:
                'Conducted a systematic comparison of feature selection methods to evaluate their impact on machine learning model performance and interpretability.'    },

    
  ],
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  

  enablePWA: true,
};

export default CONFIG;
