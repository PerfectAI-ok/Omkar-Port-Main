"use client";
// import Navbar from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


// import ContactSectionGreen from "@/components/ContactSectionGreen";
// import { ContactSectionGreen } from "@/components/ContactSectionGreen";
// import { WordRotate } from "@/components/magicui/word-rotate";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Hero } from "@/components/Hero";
import TechStack from "@/components/TechStack";
import { Contact } from "@/components/Contact";


export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const projects = [
    {
      title: "IntelliQuiz",
      description:
        "Elevate your learning with IntelliQuiz, an AI-powered quiz app that adapts to your knowledge level.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Gemini AI",
        "WebSockets",
        "Tailwind CSS",
      ],
      image: "/IntelliQuiz.png",
      liveLink: "https://intelliquiz-main-4v98.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/Intelliquiz_Main",
    },
    {
      title: "GenX AI",
      description:
        "A next-generation AI platform offering 6+ productivity tools and accurate, on-demand insights powered by top trending AI models",
      tags: ["NextJs", "SpringBoot", "Gemini AI", "Tailwind CSS"],
      image: "/Genxai.png",
      liveLink: "https://genxai-psi.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/GenXai",
    },
    {
      title: "HealthCare AI Assistant",
      description:
        "A voice-driven patient assistant using IBM Watsonx for hands-free interaction, inspired by healthcare challenges during the COVID-19 pandemic.",
      tags: [
        "TypeScript",
        "IBM Watson Assistant",
        "IBM Cloud DB",
        "Tailwind CSS",
      ],
      image: "/healthcare.png",
      liveLink: "https://health-care-ai-assistant-main.vercel.app/",
      githubLink:
        "https://github.com/OmkarKathile007/HealthCare_AI_Assistant_MAIN",
    },
    {
      title: "Surplus Shift",
      description:
        "Realtime Platform platform for connecting surplus food with local NGO's, Reduce Waste, Fight Hunger",
      tags: [
        "NextJs",
        "NodeJs",
        "MongoDB",
        "IBM Watsonx Assistant",
        "Deeplearning",
        "Image Recongnition",
        "Tailwind CSS",
      ],
      image: "/surplus.png",
      liveLink: "#",
      githubLink: "https://github.com/OmkarKathile007/Techathon_Main",
    },
    {
      title: "Inventory Management System",
      description:
        "Inventory Management, streamlining the process of stocking new products, refreshing product details, showcasing current inventory using REST APIs",
      tags: ["ReactJs", "SpringBoot", "H2 Db", "Css"],
      image: "/adminEcom.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Urban Threads",
      description:
        "UrbanThreads: A React e-commerce app to browse products, Add to cart and checkout",
      tags: ["ReactJs", "Html", "Css"],
      image: "/Ecommerce.png",
      liveLink: "https://mern-orpin-beta.vercel.app/",
      githubLink: "https://github.com/OmkarKathile007/MERN",
    },
  ];

  const techstackIcons = [
    { name: "Java", icon: "/java.svg" },
    { name: "Spring Boot", icon: "/spring-boot-1.svg" },
    { name: "Next.js", icon: "/next-js.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "MySQL", icon: "/mysql.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },

    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "React", icon: "/react.svg" },

    { name: "Python", icon: "/python.svg" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero/>

      <ProjectShowcase/>

      {/* Technologies Section */}
      {/* <section className="w-full py-16 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-l from-lime-400 to-green-600 bg-clip-text text-transparent mb-8 text-center px-4">
          Technologies I Work On
        </h1>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl px-4">
          {techstackIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-20 h-20 flex items-center justify-center bg-white p-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(144,238,144,0.5)]"
            >
              <Image
                src={icon.icon}
                width={100}
                height={100}
                alt={`${icon.name} icon`}
              />
            </div>
          ))}
        </div>
      </section> */}
      <TechStack/>

      {/* <ContactSectionGreen /> */}
      <Contact/>
    </>
  );
}
