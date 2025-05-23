
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "photo-1556742049-0cfed4f6a45d",
      github: "https://github.com/johndeveloper/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 124,
      year: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "photo-1611224923853-80b023f02d71",
      github: "https://github.com/johndeveloper/task-manager",
      demo: "https://taskmanager-demo.com",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      stars: 89,
      year: "2024"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/johndeveloper/weather-dashboard",
      demo: "https://weather-demo.com",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      stars: 67,
      year: "2023"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with data visualization, reporting, and automated insights generation.",
      image: "photo-1460925895917-afdab827c52f",
      github: "https://github.com/johndeveloper/social-analytics",
      demo: "https://analytics-demo.com",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      stars: 156,
      year: "2023"
    }
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative" id="projects">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm uppercase tracking-wider text-purple-400 font-medium">Portfolio</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
            Projects
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          A showcase of my recent work that demonstrates my passion for creating 
          innovative digital solutions and beautiful user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Calendar className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-white text-xs">{project.year}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                <span className="text-white text-xs">{project.stars}</span>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-2xl font-light tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400 leading-relaxed font-light">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-medium tracking-wide border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-purple-500 transition-all duration-300 rounded-full"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-blue-500 transition-all duration-300 rounded-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
        >
          View All Projects
          <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Projects;
