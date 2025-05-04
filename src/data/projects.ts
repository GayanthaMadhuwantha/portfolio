import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management and Billing System",
    description: "Web application for managing inventory and Wholesale billing with user authentication and real-time analytics and Reports.",
    image: "https://i.postimg.cc/SsXwgw41/Login-2.png",
    category: "Web Development",
    technologies: ["PHP", "MySQL", "Chart.js", "Javascript", "HTML", "CSS"],
    link: "https://wholesale.lotushardwares.com",
    github: "https://github.com/KavishkaGimhanaDharmasiri/Inventory-and-Distributing-Management-System"
  },  
  {
    id: 2,
    title: "Point Of Sale App",
    description: "Mobile application for tracking sales and inventory with real-time analytics.",
    image: "https://i.postimg.cc/BQJqMn8j/Screenshot-20250331-110744-portrait.png",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Chart.js", "Tailwind CSS","SQLite"],
    link: "https://example.com/pos-app",
    github: "https://github.com/GayanthaMadhuwantha/Point-of-sale-App-Using-React-native"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with a modern, responsive design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://gayanthamadhuwantha.vercel.app",
    github: "https://github.com/GayanthaMadhuwantha/portfolio"
  },
  {
    id: 4,
    title: "Betting System",
    description: "Web application for managing betting activities with user authentication and real-time updates.",
    image: "https://i.postimg.cc/mZYM6jw8/React-App.png",
    category: "Web Development",
    technologies: ["Spring Boot", "Java", "React", "RestAPI"],
    link: "https://example.com/betting-app",
    github: "https://github.com/GayanthaMadhuwantha/Betting-System"
  },
  {
    id: 5,
    title: "Point Of Sale Desktop Application",
    description: "Collaborative project management tool with task assignment, progress tracking, and team communication features.",
    image: "https://i.postimg.cc/RFb5LKYm/mockuper-1.png",
    category: "Desktop",
    technologies: ["Electron.js", "Javascript", "MySQL", "Bootsrap"],
    link: "https://example.com/pos-desktop-app",
    github: "https://github.com/GayanthaMadhuwantha/POS-system-using-Electron"
  },
  {
    id: 6,
    title: "Weather App",
    description: "Mobile application for tracking weather conditions and forecasts.",
    image: "https://i.postimg.cc/Xv1Qtc6D/Screenshot-2024-0904-110137-portrait.png",
    category: "Mobile App",
    technologies: ["React Native", "Tailwind CSS", "Visualcrossing Weather API"],
    link: "https://example.com/weather-app",
    github: "https://github.com/GayanthaMadhuwantha/Weather-App"
  },

];

export const categories = [...new Set(projects.map(project => project.category))];