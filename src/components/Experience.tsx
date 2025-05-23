
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications from concept to deployment. Worked closely with designers and product managers to deliver user-centric solutions.",
      achievements: [
        "Built 3 major applications from scratch",
        "Reduced load times by 60%",
        "Integrated payment systems"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Specialized in creating responsive and interactive user interfaces using modern JavaScript frameworks and libraries.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved user engagement by 35%",
        "Established component library"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Inc",
      location: "New York, NY",
      period: "2018 - 2019",
      description: "Started my professional journey building websites and learning modern web development practices in a collaborative environment.",
      achievements: [
        "Completed 50+ website projects",
        "Learned React and Node.js",
        "Received 'Rising Star' award"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          My professional journey and the experiences that shaped my expertise in web development.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                  <CardDescription className="text-purple-300 text-lg font-semibold">
                    {exp.company}
                  </CardDescription>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
