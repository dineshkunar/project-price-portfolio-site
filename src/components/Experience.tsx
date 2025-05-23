
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      highlights: [
        "40% performance improvement",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      color: "yellow"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed multiple web applications from concept to deployment.",
      highlights: [
        "Built 3 major applications",
        "60% load time reduction",
        "Integrated payment systems"
      ],
      color: "yellow"
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Created responsive and interactive user interfaces.",
      highlights: [
        "15+ client projects delivered",
        "35% user engagement boost",
        "Component library created"
      ],
      color: "yellow"
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Inc",
      location: "New York, NY",
      period: "2018 - 2019",
      description: "Started professional journey in modern web development.",
      highlights: [
        "50+ website projects",
        "Mastered React & Node.js",
        "'Rising Star' award"
      ],
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative" id="experience">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-32 h-32 border border-yellow-400/20 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400/5 rounded-full"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium">Career Journey</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold">
            Experience
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          My journey of growth, learning, and building exceptional digital experiences.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black transform md:-translate-x-2 z-10 shadow-lg`}></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <Card className="bg-black/40 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-1 font-medium">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-yellow-300 text-lg font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full text-sm">
                        <Award className="w-3 h-3 mr-1" />
                        Active
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
