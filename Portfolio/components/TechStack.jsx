// import React from 'react'
// import Image from 'next/image'

// const TechStack = () => {
//     const techstackIcons = [
//     { name: "Java", icon: "/java.svg" },
//     { name: "Spring Boot", icon: "/spring-boot-1.svg" },
//     { name: "Next.js", icon: "/next-js.svg" },
//     { name: "JavaScript", icon: "/javascript.svg" },
//     { name: "HTML", icon: "/html.svg" },
//     { name: "CSS", icon: "/css.svg" },
//     { name: "Tailwind CSS", icon: "/tailwind.svg" },
//     { name: "MySQL", icon: "/mysql.svg" },
//     { name: "Node.js", icon: "/nodejs.svg" },

//     { name: "MongoDB", icon: "/mongodb.svg" },
//     { name: "React", icon: "/react.svg" },

//     { name: "Python", icon: "/python.svg" }
//   ];
//   return (
//     <section className="w-full py-16 flex flex-col items-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-l from-lime-400 to-green-600 bg-clip-text text-transparent mb-8 text-center px-4">
//               Technologies I Work On
//             </h1>
    
//             <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl px-4">
//               {techstackIcons.map((icon, idx) => (
//                 <div
//                   key={idx}
//                   className="w-20 h-20 flex items-center justify-center bg-white p-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(144,238,144,0.5)]"
//                 >
//                   <Image
//                     src={icon.icon}
//                     width={100}
//                     height={100}
//                     alt={`${icon.name} icon`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>
//   )
// }

// export default TechStack

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TechStack = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create animated stars for background
    const newStars = [];
    for (let i = 0; i < 20; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: Math.random() * 5
      });
    }
    setStars(newStars);
  }, []);

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      className="relative w-full py-20 flex flex-col items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0e17 0%, #05070a 100%)'
      }}
    >
      {/* Animated stars background */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            background: 'rgba(255, 255, 255, 0.8)',
            animationDelay: `${star.animationDelay}s`
          }}
        />
      ))}

      {/* Glowing particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/20 blur-[80px] animate-pulse" />
      
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent text-transparent">
          Technologies I Work On
        </span>
      </motion.h1>

      <motion.div 
        className="flex flex-wrap justify-center  gap-8 w-full max-w-6xl px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {techstackIcons.map((icon, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            {/* <div className="absolute w-1/3 inset-0  bg-gradient-to-r from-lime-400 to-green-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
            
            <div className="w-24 h-24 flex flex-col items-center justify-center  p-4 rounded-full border border-lime-300 relative z-10 transition-all duration-300 bg-gray-200/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.3)]">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src={icon.icon}
                  fill
                  alt={`${icon.name} icon`}
                  className="object-contain"
                />
              </div>
              
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl text-cyan-200">
          Continuously expanding my skillset to build cutting-edge applications with the latest technologies
        </p>
      </motion.div>

      {/* <style jsx global>{`
        @keyframes text-glow {
          0% { text-shadow: 0 0 5px rgba(56, 189, 248, 0.5), 0 0 10px rgba(139, 92, 246, 0.3); }
          50% { text-shadow: 0 0 15px rgba(56, 189, 248, 0.8), 0 0 20px rgba(139, 92, 246, 0.5); }
          100% { text-shadow: 0 0 5px rgba(56, 189, 248, 0.5), 0 0 10px rgba(139, 92, 246, 0.3); }
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default TechStack;