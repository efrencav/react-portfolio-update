import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { iosDownload } from 'react-icons-kit/ionicons/iosDownload';

import Awardee1 from '../assets/image/awardee-1.png';
import Awardee2 from '../assets/image/awardee-2.png';
import Awardee3 from '../assets/image/awardee-3.png';
import Awardee4 from '../assets/image/awardee-4.png';
import AwardImage1 from '../assets/image/award.svg';
import AwardImage2 from '../assets/image/award.svg';
import AwardImage3 from '../assets/image/award.svg';
import AwardImage4 from '../assets/image/award.svg';

import PortfolioImage1 from '../assets/image/portfolio-1.png';
import PortfolioImage2 from '../assets/image/portfolio-2.png';
import PortfolioImage3 from '../assets/image/portfolio-3.png';
import PortfolioImage4 from '../assets/image/portfolio-4.png';
import PortfolioImage5 from '../assets/image/portfolio-5.png';
import PortfolioImage6 from '../assets/image/portfolio-6.png';
// import PortfolioImage7 from '../assets/image/portfolio-7.png';
// import PortfolioImage8 from '../assets/image/portfolio-8.png';

import Step1 from '../assets/image/research.svg';
import Step2 from '../assets/image/design.svg';
import Step3 from '../assets/image/build.svg';

import SkillIcon1 from '../assets/image/skill-1.svg';
import SkillIcon2 from '../assets/image/skill-2.svg';
import SkillIcon3 from '../assets/image/skill-3.svg';
import SkillIcon4 from '../assets/image/skill-4.svg';

import Client1 from '../assets/image/client-1.png';
import Client2 from '../assets/image/client-2.png';
import Client3 from '../assets/image/client-3.png';
import Client4 from '../assets/image/client-4.png';
import Client5 from '../assets/image/client-5.png';
import Client6 from '../assets/image/client-6.png';

import Reviewer1 from '../assets/image/client-avatar-1.jpg';
import Reviewer2 from '../assets/image/client-avatar-2.jpg';
import Reviewer3 from '../assets/image/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/efrencav',
  },
  // {
  //   icon: socialFacebook,
  //   url: '#',
  // },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/efrencavazos/',
  },
  {
    icon: socialGithub,
    url: 'https://github.com/efrencav',
  },
  {
    icon: iosDownload,
    url: 'https://s3.amazonaws.com/react-portfolio-images/Efren_Cavazos_Resume_2019.pdf',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECTS',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'AWARDS',
    path: '#awards_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Crystal Award',
    awardDetails: 'Packaging Design',
    awardeeLogo: Awardee1,
    awardeeName: 'American Marketing Association',
    date: '2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Lantern Award',
    awardDetails: 'Automated Service Delivery Platform Launch Event',
    awardeeLogo: Awardee2,
    awardeeName: 'Business Marketing Association',
    date: '2016',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Lantern Award',
    awardDetails: 'Infinity System Trailer Traveling Exhibit',
    awardeeLogo: Awardee3,
    awardeeName: 'Business Marketing Association',
    date: '2016',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Lantern Award',
    awardDetails: 'Capabilities booklet',
    awardeeLogo: Awardee4,
    awardeeName: 'Business Marketing Association',
    date: '2015',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Lantern Award',
    awardDetails: 'Product, Equipment or parts catalog',
    awardeeLogo: Awardee4,
    awardeeName: 'Business Marketing Association',
    date: '2014',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Graphic Excellence Award',
    awardDetails: 'Best of Category - Product, Equipment or parts catalog',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: '2015',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Lantern Award',
    awardDetails: 'Digital Division - Gold Award',
    awardeeLogo: Awardee4,
    awardeeName: 'Business Marketing Association',
    date: '2015',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'BMA Lantern Award',
    awardDetails: 'Best of Division',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: '2015',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'DESIGN',
    portfolioItem: [
      {
        title: 'Silestone Countertops Website Design',
        description:
          "Website design for a leading countertop manufacturing company.",
        image: PortfolioImage1,
        link: 'https://www.silestone.com/',
        // featuredIn: 'AWWWARDS',
        // featuredLink: '#',
        // view: '4.5K',
        // love: '1.5K',
        // feedback: '1.2K',
        buildWith: [
          {
            content: 'UI/UX Design',
          },
          {
            content: 'Art Direction',
          },
          // {
          //   content: 'Styled Component',
          // },
        ],
      },
      {
        title: 'Stone Systems',
        description:
          "Website design for a stone fabrication company.",
        image: PortfolioImage2,
        link: 'http://www.stone-systems.com/',
        // featuredIn: 'AppStore',
        // featuredLink: '#',
        // view: '8.5K',
        // love: '5.5K',
        // feedback: '3.2K',
        buildWith: [
          {
            content: 'UI/UX Design',
          },
          {
            content: 'Art Direction',
          },
          // {
          //   content: 'Styled Component',
          // },
        ],
      },
    ],
  },
  {
    title: 'DEVELOPMENT',
    portfolioItem: [
      {
        title: 'My Garage React Application',
        description:
          "Manage all your car information in just one place.",
        image: PortfolioImage3,
        link: 'https://my-car-garage.herokuapp.com/',
        // featuredIn: 'AWWWARDS',
        // featuredLink: '#',
        // view: '4.5K',
        // love: '1.5K',
        // feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'Heroku',
          },
        ],
      },
      {
        title: 'React Clicky Game',
        description:
          "A click game developed using React JS",
        image: PortfolioImage4,
        link: 'https://efrencav.github.io/react-clicky-game-hw/',
        // featuredIn: 'AppStore',
        // featuredLink: '#',
        // view: '8.5K',
        // love: '5.5K',
        // feedback: '3.2K',
        buildWith: [
          {
            content: 'React',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'Heroku',
          },
        ],
      },
      {
        title: 'Boots-N-Stuff',
        description:
          "An eCommerce website that sells cowboy boots.",
        image: PortfolioImage5,
        link: 'https://boots-n-stuff.herokuapp.com/',
        // featuredIn: 'AppStore',
        // featuredLink: '#',
        // view: '8.5K',
        // love: '5.5K',
        // feedback: '3.2K',
        buildWith: [
          {
            content: 'React',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'Heroku',
          },
        ],
      },
      {
        title: 'Eat-the-Burger',
        description:
          "A website that allows you to load your burger and eat it :).",
        image: PortfolioImage6,
        link: 'https://app-eat-da-burger.herokuapp.com/',
        // featuredIn: 'AppStore',
        // featuredLink: '#',
        // view: '8.5K',
        // love: '5.5K',
        // feedback: '3.2K',
        buildWith: [
          {
            content: 'React',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'Heroku',
          },
        ],
      },
    ],
  },
  {
    title: 'ANIMATION',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'TV ADVERTISEMENT',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'MARKETING',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you ',
  },
];

export const SERVICE_LIST = [
  {
    title: 'UI/UX Design',
    listItems: [
      {
        content: 'Design Sprints',
      },
      {
        content: 'User Research',
      },
      {
        content: 'Visual Design',
      },
      {
        content: 'Mobile App Design',
      },
      {
        content: 'Tracking & Learning',
      },
      {
        content: 'Building Traction',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'WordPress',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'HTML/CSS',
      },
      {
        content: 'Javascript',
      },
      {
        content: 'JQuery',
      },
    ],
  },
  // {
  //   title: 'Mobile App Development',
  //   listItems: [
  //     {
  //       content: 'iOS',
  //     },
  //     {
  //       content: 'Android',
  //     },
  //     {
  //       content: 'React Native',
  //     },
  //     {
  //       content: 'Ionic & Apache Cordova',
  //     },
  //     {
  //       content: 'NodeJS',
  //     },
  //     {
  //       content: '3D & VR',
  //     },
  //   ],
  // },
];

export const SKILLS = [
  {
    title: 'Graphic Design / Branding',
    description:
      'I will ensure that your brand stands out from the crowd with the best design solutions',
    icon: SkillIcon1,
    successRate: '100',
  },
  {
    title: 'UI/UX Design',
    description:
      "Tell your brand's story while maximizing leads, with a custom website that will oup-perform your competition!",
    icon: SkillIcon2,
    successRate: '90',
  },
  {
    title: 'Web Application',
    description:
      'We believe in the importance of investigating the newest technologies, backing them up with practical examples and sharing them with our clients.',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Mobile Application',
    description:
      'Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices.',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Thomas Cruz',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Marhta Robson',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Dexter Patterson',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/efrencav',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
