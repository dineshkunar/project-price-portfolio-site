
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "photo-1556742049-0cfed4f6a45d",
      github: "https://github.com/dineshkumar/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 124,
      year: "2024"
    },
    {
      title: "AI Task Manager",
      description: "Intelligent task management with AI-powered prioritization, real-time collaboration, and smart scheduling features.",
      image: "photo-1611224923853-80b023f02d71",
      github: "https://github.com/dineshkumar/ai-task-manager",
      demo: "https://aitaskmanager-demo.com",
      technologies: ["React", "AI/ML", "MongoDB", "Express"],
      stars: 189,
      year: "2024"
    },
    {
      title: "3D Portfolio Showcase",
      description: "Interactive 3D portfolio with WebGL animations, immersive experiences, and modern web technologies.",
      image: "photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/dineshkumar/3d-portfolio",
      demo: "https://3dportfolio-demo.com",
      technologies: ["Three.js", "React", "WebGL", "GSAP"],
      stars: 267,
      year: "2024"
    },
    {
      title: "Blockchain Analytics",
      description: "Comprehensive blockchain analytics platform with real-time data visualization and smart contract insights.",
      image: "photo-1639762681485-074b7f938ba0",
      github: "https://github.com/dineshkumar/blockchain-analytics",
      demo: "https://blockchain-demo.com",
      technologies: ["React", "Web3", "D3.js", "Node.js"],
      stars: 156,
      year: "2023"
    }
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative" id="projects">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400/5 rounded-3xl rotate-45 transform-gpu"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-yellow-500/5 rounded-full transform-gpu"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <div className="inline-block mb-4">
          <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium">Portfolio</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold">
            Projects
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          A showcase of my recent work that demonstrates innovation, creativity, 
          and technical excellence in modern web development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => (
          <Card key={index} className="group bg-black/40 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="relative overflow-hidden">
              <img 
                src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center border border-yellow-400/30">
                  <Calendar className="w-3 h-3 text-yellow-400 mr-1" />
                  <span className="text-white text-xs">{project.year}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center border border-yellow-400/30">
                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                <span className="text-white text-xs">{project.stars}</span>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-2xl font-light tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
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
                      className="px-3 py-1 bg-yellow-500/10 text-yellow-300 rounded-full text-xs font-medium tracking-wide border border-yellow-500/20"
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
                  className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-full"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 relative z-10">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
        >
          <Eye className="w-5 h-5 mr-2" />
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
