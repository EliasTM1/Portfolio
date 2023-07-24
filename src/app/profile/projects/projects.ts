export interface Project {
  details: ProjectDetails;
  demo: string;
  description: string;
  repo: string;
  title: string;
  technologiesUsed: string[];
  sliderInfo: any[];
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

export const currentProjects: Project[] = [
  {
    title: 'Stock Market Dashboard',
    description:
      'Allows you to search for a stock and see its current price and historical data.',
    technologiesUsed: ['Angular', 'Tailwind', 'AWS'],
    repo: 'https://github.com/EliasTM1/ng-Dashboard',
    sliderInfo: [
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: true,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
        title: 'Wallpaper of the week',
        description:
          "It's been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it's crazy to imagine there's more than 350+ wallpapers available to download for your different...",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
        title: 'Stunning 3D Work',
        description:
          "I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn't stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: false,
      },
    ],
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/projects/stocks/tickers.jpg',
      subBannerImg: '../../../assets/images/projects//stocks/laptop.jpg',
      description:
        'This application is an all-encompassing Stock Market Dashboard designed to provide users with in-depth historical data across various timeframes. The aim is to offer a thorough analysis of market trends, enabling users to make informed, data-driven investment decisions. The dashboard is not only limited to historical data, but it also presents comprehensive financial information along with a dedicated section for technical analysis. This dual approach, integrating both fundamental and technical aspects, provides users with a holistic understanding of their chosen stocks and creates a comprehensive environment for assessing potential investments.',

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
      descriptionSub:
        'The architecture of the application underscores a strong commitment to performance and user experience. With the implementation of lazy loading, the application ensures optimal performance by loading components as needed, effectively separating the login modules from the main app modules. Furthermore, the application interfaces with multiple third-party APIs, including Finnhub and Polygon.io, ensuring the delivery of accurate and up-to-date market data. On the security front, the app integrates Amazon Web Services (AWS) Cognito for user management. This provides seamless user sign-up and sign-in services, along with secure user authentication. The result is a user-friendly, robust, and reliable tool, perfect for anyone looking to navigate the world of stock market investment with ease and confidence.',
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
    sliderInfo: [
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: true,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
        title: 'Wallpaper of the week',
        description:
          "It's been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it's crazy to imagine there's more than 350+ wallpapers available to download for your different...",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
        title: 'Stunning 3D Work',
        description:
          "I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn't stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: false,
      },
    ],
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/cool.jpg',
      subBannerImg:
        '../../../assets/images/projects/authentication/whoAreYou.jpg',
      description:
        'The Authentication Application is a robust, secure platform built on Angular, offering an advanced user management system that harnesses the capabilities of Amazon Web Services (AWS) Cognito. This comprehensive solution enables seamless user sign-up, sign-in, and authentication processes. Built with TypeScript and styled with SCSS, the application offers a combination of powerful functionality and a modern, user-friendly interface, catering to a variety of use cases.',
      descriptionSub:
        'The application is backed by AWS Lambda, which ensures efficient serverless compute execution, resulting in scalable, responsive operations. It also leverages AWS Secrets Manager for handling sensitive information, further enhancing the security aspect. This multi-faceted approach towards security makes it an ideal choice for projects demanding high levels of data integrity. Overall, the Authentication Application showcases a harmonious blend of advanced security, user-friendly design, and optimal performance, setting a high standard for user management systems.',
      features: [
        'AWS Cognito Authentication: Integration of AWS Cognito to manage user authentication efficiently.',
        'Serverless Architecture: Utilizes AWS Lambda functions for handling backend processes in a serverless architecture.',
        'AWS Secrets Manager: Incorporation of AWS Secrets Manager to handle and safeguard sensitive information.',
        'Responsive Design: The application exhibits a responsive design to ensure optimal user experience across different devices and screen sizes.',
        'Scalable Architecture: The application is built with scalability in mind, allowing it to handle increasing amounts of work by adding resources.',
        'Angular Framework: The entire application is built using the robust Angular framework, utilizing TypeScript for safer and more reliable code',
        'Secure: Emphasizes on security and data integrity to ensure a reliable and secure platform for users.',
        'SCSS Styling: Utilization of SCSS for advanced styling, variable use, and better organized CSS.',
        'User-Friendly Interface: The interface is intuitively designed for a seamless and user-friendly experience.',
      ],
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
    sliderInfo: [
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: true,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
        title: 'Wallpaper of the week',
        description:
          "It's been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it's crazy to imagine there's more than 350+ wallpapers available to download for your different...",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
        title: 'Stunning 3D Work',
        description:
          "I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn't stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: false,
      },
    ],
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/projects/spoonacular/breakfast.jpg',
      subBannerImg: '../../../assets/images/projects/spoonacular/pancakes.jpg',
      description: '',
      features: [
        'Recipe Finder: Enables users to search and discover new recipes based on certain ingredients, diet, or cooking time.',
        'Nutrition Analysis: Provides a comprehensive nutrition breakdown for each recipe, including macros and micros.',
        'Meal Planner: An integrated meal planner to help users plan their meals for a day, a week, or a month.',
        'Grocery List Generator: Automatically generates a grocery list based on the chosen recipes.',
        'Food Trivia: Offers fun and educational food trivia and facts to engage users.',
        'Dietary Restrictions Management: Allows users to filter recipes according to specific dietary restrictions or preferences, such as vegan, gluten-free, etc.',
        'Cooking Tutorial Videos: Offers video tutorials or guides for certain recipes to help users better understand the cooking process.',
        'User Recipe Upload: Allows users to upload their own recipes, which can then be shared with the community.',
        'Recipe Rating and Reviews: Users can rate and review recipes, providing valuable feedback for others in the community.',
      ],
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
    sliderInfo: [
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: true,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
        title: 'Wallpaper of the week',
        description:
          "It's been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it's crazy to imagine there's more than 350+ wallpapers available to download for your different...",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
        title: 'Stunning 3D Work',
        description:
          "I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn't stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: false,
      },
    ],
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/projects/eCommerce/commerceStreet.jpg',
      subBannerImg: '../../../assets/images/projects/eCommerce/openSign.jpg',
      description:
        'The E-Commerce Platform is a dynamic React application offering a streamlined online shopping experience. Leveraging Chakra UI, the platform delivers a sleek and accessible interface, enhancing user engagement and navigation.',
      descriptionSub:
        "Redux manages the application's global state, ensuring consistent user experiences and smooth data flow across components. The meticulous design covers all e-commerce functions, while React's component-based architecture promotes clean, reusable code. The application's predictability and maintenance are enhanced by Redux's state container, making this platform a paragon of efficient and user-centric eCommerce development.",
      features: [],
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
    sliderInfo: [
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: true,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
        title: 'Wallpaper of the week',
        description:
          "It's been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it's crazy to imagine there's more than 350+ wallpapers available to download for your different...",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
        title: 'Stunning 3D Work',
        description:
          "I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn't stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.",
        active: false,
      },
      {
        src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
        title: 'Daily Design Inspiration',
        description:
          "Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you'll find the most interesting things/finds/work curated by one of us to simply inspire your day.",
        active: false,
      },
    ],
    demo: 'http://example.com/project1/demo',
    details: {
      bannerImg: '../../../assets/images/projects/reactEcommerce/brackets.jpg',
      subBannerImg:
        '../../../assets/images/projects/reactEcommerce/reactIDE.jpg',
      description: '',
      features: [],
      descriptionSub: '',
      technologiesUsed: [''],
      projectMedia: [''],
    },
  },
];
