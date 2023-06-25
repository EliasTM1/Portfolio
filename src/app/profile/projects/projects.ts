export interface Project {
  details?: ProjectDetails;
  demo: string;
  description: string;
  repo: string;
  title: string;
  technologiesUsed: string[];
}

export interface ProjectDetails {
  bannerImg: string;
  subBannerImg: string;
  description: string;
  descriptionSub: string;
  features: string[];
  projectMedia: string[];
  technologiesUsed: string[];
}

export const currentProjects : Project[] = [
  {
    title: 'Stock Market Dashboard',
    description:
      'Allows you to search for a stock and see its current price and historical data.',
    technologiesUsed: ['Angular', 'Tailwind', 'AWS'],
    repo: 'https://github.com/EliasTM1/ng-Dashboard',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/projects/stocks/tickers.jpg',
      subBannerImg: '../../../assets/images/projects//stocks/laptop.jpg',
      description: 'This application is an all-encompassing Stock Market Dashboard designed to provide users with in-depth historical data across various timeframes. The aim is to offer a thorough analysis of market trends, enabling users to make informed, data-driven investment decisions. The dashboard is not only limited to historical data, but it also presents comprehensive financial information along with a dedicated section for technical analysis. This dual approach, integrating both fundamental and technical aspects, provides users with a holistic understanding of their chosen stocks and creates a comprehensive environment for assessing potential investments.',

      features: [
        'Historical Data Visualization: Detailed historical data across various timeframes for data-driven decision making.',
        'Financial Information Analysis: Comprehensive financial data for understanding investment fundamentals.',
        'Technical Analysis Tools: Specialized section for interpreting technical stock indicators.',
        'Lazy Loading Implementation: Optimized performance through the selective loading of components.',
        'Multi-API Integration: Syncs with Finnhub, Polygon.io, and more for accurate, real-time market data.',
        'AWS Cognito User Management: Seamless, secure user management with sign-up, sign-in, and authentication services.',
        'Responsive Design: Accommodates various devices and screen sizes without compromising functionality or user experience.',
        'Security and Reliability: Emphasizes data integrity and user security for a trustworthy analysis platform.',
        'User-Friendly Interface: Designed for a seamless and intuitive user experience.',
      ],
      descriptionSub: 'The architecture of the application underscores a strong commitment to performance and user experience. With the implementation of lazy loading, the application ensures optimal performance by loading components as needed, effectively separating the login modules from the main app modules. Furthermore, the application interfaces with multiple third-party APIs, including Finnhub and Polygon.io, ensuring the delivery of accurate and up-to-date market data. On the security front, the app integrates Amazon Web Services (AWS) Cognito for user management. This provides seamless user sign-up and sign-in services, along with secure user authentication. The result is a user-friendly, robust, and reliable tool, perfect for anyone looking to navigate the world of stock market investment with ease and confidence.',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
  {
    title: 'AWS Authentication',
    description:
      'Angular app that allows you to sign up, sign in, and sign out using AWS Cognito.',
    technologiesUsed: ['Angular', 'Bootstrap', 'JavaScript', 'AWS Cognito'],
    repo: 'http://example.com/project1',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
  {
    title: 'Spoonacular API',
    description:
      'Angular app that allows you to search for recipes and see their ingredients and instructions.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    repo: 'http://example.com/project1',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
  {
    title: 'Angular E-commerce',
    description:
      'Angular app that allows you to search for products and add them to your cart and checkout.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    repo: 'http://example.com/project1',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
  {
    title: 'Green Blog',
    description:
      'Share experiences on the growth of plants and vegetables.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    repo: 'http://example.com/project1',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
  {
    title: 'React E-commerce',
    description:
      'Allows you to search for products and add them to your cart and checkout.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    repo: 'http://example.com/project1',
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '',
      subBannerImg: '',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
];
