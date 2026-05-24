export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", items: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS"] },
  { category: "Libraries & Frameworks", items: ["React", "Tailwind CSS"] },
  { category: "Backend & Tools", items: ["Firebase", "Supabase", "Git", "GitHub"] },
  { category: "Languages", items: ["JavaScript", "Java"] },
  { category: "Additional", items: ["RESTful APIs", "Responsive UI", "Project Workflows"] },
];
