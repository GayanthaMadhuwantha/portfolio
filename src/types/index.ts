export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}