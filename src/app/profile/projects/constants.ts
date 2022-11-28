export interface Categories {
  name: string;
  qty: number;
}

export interface Project {
  title: string;
  description: string;
  previewLink: string;
  gitRepo: string;
  icons : string;
  category: availableTech;
}

type availableTech = "angular" | "vanillaDev" | "node" | "mean"

export const filterCategories : Categories[] = [
  {
    name: "All",
    qty: 2
  },
  {
    name: "Angular",
    qty: 2
  },
  {
    name: "HTML CSS JS",
    qty: 2
  },
  {
    name: "MEAN",
    qty: 2
  },
  {
    name: "Node",
    qty: 2
  },
]

export const projects : Project[] = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae tempore sint, esse molestias eos!",
    previewLink: "https://www.google.com/",
    gitRepo: "https://github.com/EliasTM1",
    icons : "",
    category: "angular"
  },
]
