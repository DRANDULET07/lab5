// Описание интерфейса пользователя [cite: 42]
export interface User {
  name: string; // [cite: 44]
  email: string; // [cite: 45]
  age: number; // [cite: 46]
}

// Тип-алиас для уровней навыков [cite: 47, 48]
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Интерфейс для навыка [cite: 49, 50]
export interface Skill {
  id: number; // [cite: 51]
  name: string; // [cite: 52]
  level: SkillLevel; // [cite: 53]
}