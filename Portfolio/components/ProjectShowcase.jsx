
'use client'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "IntelliQuiz",
    description: "IntelliQuiz is an edtech platform built for learners, educators, and students to generate multiple‑choice quizzes from paragraph contexts, which also includes features like multiplayer mode and real‑time online assessments",
    image: "/intelliquiz3.png",
    technologies: ["React", "Tailwind","Websockets", "Gemini", "Node.js", "Express.js" ,"MongoDB"],
    liveUrl: "https://intelliquiz-main-4v98.vercel.app/",
    githubUrl: "https://github.com/OmkarKathile007/Intelliquiz_Main",
    featured: true
  },
  {
    id: 2,
    title: "GenxAI Platform",
    description: "GenxAI is an AI-powered platform Developed for Boosting Productivity,which includes features like text-summarization ,code-converter ,cover letter generation ,Improve Response, Roadmap Generator.",
    image: "Genxai.png",
    technologies: ["Next.js", "Tailwind","Clerk", "Springboot", "Docker"],
    liveUrl: "https://genxai-psi.vercel.app/",
    githubUrl: "https://github.com/OmkarKathile007/GenXai",
    featured: true
  },
  
  {
    id: 4,
    title: "HealthCare AI Assistant",
    description: "A voice-driven patient assistant using IBM Watsonx for hands-free interaction, Inspired by healthcare challenges during the COVID-19 pandemic",
    image: "AiHealthCare.png",
    technologies: ["Typescript", "Tailwind", "IBM Watsonx Assistant", "Springboot","MySQL"],
    liveUrl: "https://health-care-ai-assistant-main.vercel.app/",
    githubUrl: "https://github.com/OmkarKathile007/HealthCare_AI_Assistant_MAIN",
    featured: true
  },
  
  {
    id: 6,
    title: "Surplus Shift",
    description: "Surplus Shift a food platform connecting surplus donors with NGOs to reduce waste and combat hunger",
    image: "/surplus.png",
    technologies: ["Next.js", "Tailwind", "Node.js", "Express.js", "MongoDB","TensorFlow"],
    liveUrl: "https://github.com/OmkarKathile007/Techathon_Main",
    githubUrl: "https://github.com/OmkarKathile007/Techathon_Main",
    featured: true
  }
];

export const ProjectShowcase = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
          
          {/* Filter buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none' 
                  : 'bg-transparent text-gray-300 border border-purple-500/50 hover:bg-purple-500/10'
              }`}
              onClick={() => {
                setFilter('all');
                setCurrentPage(0);
              }}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'featured' ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                filter === 'featured' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none' 
                  : 'bg-transparent text-gray-300 border border-purple-500/50 hover:bg-purple-500/10'
              }`}
              onClick={() => {
                setFilter('featured');
                setCurrentPage(0);
              }}
            >
              <Star className="w-4 h-4 mr-2" />
              Featured Only
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="relative bg-[#121230] border border-purple-500/20 rounded-xl overflow-hidden 
                         transform transition-all duration-500  group"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121230] to-transparent opacity-80" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className="bg-blue-500/10 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
              
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl"></div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              className="border border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/10 disabled:opacity-50"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentPage ? 'default' : 'outline'}
                  size="icon"
                  className={`${
                    index === currentPage 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'bg-transparent text-gray-300 border border-purple-500/50 hover:bg-purple-500/10'
                  }`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              className="border border-purple-500/50 text-purple-300 bg-transparent hover:bg-purple-500/10 disabled:opacity-50"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};