export interface Project {
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  projectRepo: string;
  projectDemo: string;
}

export const currentProjects = [
  {
    "projectTitle": "Stock Market Dashboard",
    "projectDescription": "Allows you to search for a stock and see its current price and historical data.",
    "technologiesUsed": ["Angular", "Tailwind", "AWS"],
    "projectRepo": "http://example.com/project1",
    "projectDemo" : "http://example.com/project1/demo"
  },
  {
    "projectTitle": "AWS Authentication",
    "projectDescription": "Angular app that allows you to sign up, sign in, and sign out using AWS Cognito.",
    "technologiesUsed": ["Angular", "Bootstrap", "JavaScript", "AWS Cognito"],
    "projectRepo": "http://example.com/project1",
    "projectDemo" : "http://example.com/project1/demo"
  },
  {
    "projectTitle": "Spoonacular API",
    "projectDescription": "Angular app that allows you to search for recipes and see their ingredients and instructions.",
    "technologiesUsed": ["HTML", "CSS", "JavaScript"],
    "projectRepo": "http://example.com/project1",
    "projectDemo" : "http://example.com/project1/demo"
  },
  {
    "projectTitle": "Angular E-commerce",
    "projectDescription": "Angular app that allows you to search for products and add them to your cart and checkout.",
    "technologiesUsed": ["HTML", "CSS", "JavaScript"],
    "projectRepo": "http://example.com/project1",
    "projectDemo" : "http://example.com/project1/demo"
  },
  {
    "projectTitle": "Green Blog",
    "projectDescription": "Share experiences on the growth of plants and vegetables.",
    "technologiesUsed": ["HTML", "CSS", "JavaScript"],
    "projectRepo": "http://example.com/project1",
    "projectDemo" : "http://example.com/project1/demo"
  }
]
