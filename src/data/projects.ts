import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and Node.js, featuring user authentication, product management, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and progress with data visualization and personalized recommendations.",
    image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Chart.js"],
    link: "https://example.com/fitness-app",
    github: "https://github.com/example/fitness-app"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with a modern, responsive design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/portfolio",
    github: "https://github.com/example/portfolio"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Web application that uses machine learning to generate blog posts, social media content, and marketing copy.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "https://example.com/ai-content",
    github: "https://github.com/example/ai-content"
  },
  {
    id: 5,
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with task assignment, progress tracking, and team communication features.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "https://example.com/task-dashboard",
    github: "https://github.com/example/task-dashboard"
  },
  {
    id: 6,
    title: "Smart Home IoT System",
    description: "IoT system for monitoring and controlling home devices, with a mobile app interface and data analytics.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "IoT",
    technologies: ["React", "Node.js", "MQTT", "Arduino"],
    link: "https://example.com/smart-home",
    github: "https://github.com/example/smart-home"
  }
];

export const categories = [...new Set(projects.map(project => project.category))];