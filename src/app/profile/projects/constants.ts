export type Difficulty = {
  difficulty: string;
  projectId: number;
}

// type availableStack = "angular" | "vanillaDev" | "node" | "mean"

export const filterCategories : Difficulty[] = [
  {
    difficulty: "Fundamental",
    projectId: 2
  },
  {
    difficulty: "Medium",
    projectId: 3
  },
  {
    difficulty: "Complex",
    projectId: 4
  },
]
