export interface Categories {
  name: string;
  qty: number;
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
