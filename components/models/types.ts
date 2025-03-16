// models/types.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
