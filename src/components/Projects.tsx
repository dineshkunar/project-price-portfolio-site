
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "photo-1556742049-0cfed4f6a45d",
      github: "https://github.com/johndeveloper/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 124
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "photo-1611224923853-80b023f02d71",
      github: "https://github.com/johndeveloper/task-manager",
      demo: "https://taskmanager-demo.com",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      stars: 89
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/johndeveloper/weather-dashboard",
      demo: "https://weather-demo.com",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      stars: 67
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with data visualization, reporting, and automated insights generation.",
      image: "photo-1460925895917-afdab827c52f",
      github: "https://github.com/johndeveloper/social-analytics",
      demo: "https://analytics-demo.com",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      stars: 156
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative">
              <img 
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4 bg-slate-900/80 rounded-full px-3 py-1 flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-white text-sm">{project.stars}</span>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
