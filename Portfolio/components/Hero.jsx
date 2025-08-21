// 'use client'
// import React from 'react'
// import { TypingText } from './TypingText'
// import Image from 'next/image'
// import { WordRotate } from './magicui/word-rotate'
// import { TypewriterEffect } from './ui/typewriter-effect'
// import { TextGenerateEffect } from './ui/text-generate-effect'

// export const Hero = () => {
    
//   const words = `A passionate developer focused on crafting innovative solutions.`;
//   return (
//     <main className="w-full min-h-screen relative">
//             <video
//               className="absolute top-0 left-0 w-full h-full object-cover"
//               src="/videos/MainSection.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
    
    
//             <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center bg-black/50">
//               <div className="w-full  lg:w-1/2 px-4 py-8 space-y-4  sm:justify-center flex flex-col  md:relative md:left-24  lg:text-left">
//                 <span className="md:text-2xl justify-start   sm:text-3xl text-yellow-50 font-bold">
//                   Hey there👋, I'm
//                 </span>
    
//                 <TypingText
//                   text="Omkar Kathile"
//                   speed={120}
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent"
//                 />
//                 <TextGenerateEffect duration={5} filter={false} words={words}/>
                
    
               
//                </div> 
    
//               {/* Hidden on small screens; visible from lg and up */}
//               <div className="hidden lg:block w-3/4 lg:w-1/2 p-4">
//                 <div className="relative w-full h-auto">
//                   <Image
//                     src="/monitor3.png"
//                     alt="Monitor"
//                     width={600}
//                     height={350}
//                     className="w-full h-full md:mx-16 md:w-5/6 object-cover rounded-lg shadow-lg"
//                   />
//                   <WordRotate
//                     className="absolute top-2/5 md:ml-3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl sm:text-xl   font-extrabold bg-gradient-to-r from-yellow-200 to-lime-400 
//             bg-clip-text text-transparent "
//                     words={[
//                       "TechEnthusiast",
//                       "FullStackDeveloper",
//                       "BackendDeveloper",
//                       "FrontendDeveloper",
//                       "AI Enthusiast",
//                     ]}
//                   />
//                 </div>
//               </div>
//             </div>
//           </main>
//   )
// }

// // export default Hero



// 'use client'
// import React from 'react'
// import { TypingText } from './TypingText'
// import Image from 'next/image'
// import { WordRotate } from './magicui/word-rotate'
// import { TypewriterEffect } from './ui/typewriter-effect'
// import { TextGenerateEffect } from './ui/text-generate-effect'

// export const Hero = () => {
//   const words = `A passionate developer focused on crafting innovative solutions.`;
  
//   return (
//     <main className="w-full min-h-screen relative">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/MainSection.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
    
//       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 py-8 lg:py-0">
//         <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4">
//           {/* Text Content - Always first in column layout */}
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-4 md:space-y-8 mx-auto  lg:text-left">
//             <span className="text-xl align-start md:text-2xl  font-bold text-yellow-50">
//               Hey there👋, I'm
//             </span>
//             <br />
//             <TypingText
//               text="Omkar Kathile"
//               speed={120}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent mx-auto lg:mx-0"
//             />
            
//             <div className="px-2 sm:px-0">
//               <TextGenerateEffect 
//                 duration={5} 
//                 filter={false} 
//                 words={words}
//                 className="text-base "
//               />
//             </div>
//           </div> 
    
//           {/* Monitor Image - Visible on all screens */}
//           <div className="w-full lg:w-1/2 p-4 flex justify-center">
//             <div className="relative w-full max-w-md lg:max-w-none">
//               <Image
//                 src="/monitor3.png"
//                 alt="Monitor"
//                 width={600}
//                 height={350}
//                 className="w-full h-auto object-contain mx-auto"
//               />
//               <WordRotate
//                 className="absolute top-1/3 md:top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-lime-400 bg-clip-text text-transparent"
//                 words={[
//                   "TechEnthusiast",
//                   "FullStackDeveloper",
//                   "BackendDeveloper",
//                   "FrontendDeveloper",
//                   "AI Enthusiast",
//                 ]}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// app/components/Hero.jsx
'use client'
import React from 'react'
import { TypingText } from './TypingText'
import Image from 'next/image'
import { WordRotate } from './magicui/word-rotate'
import { TypewriterEffect } from './ui/typewriter-effect'
import { TextGenerateEffect } from './ui/text-generate-effect'

export const Hero = () => {
  const words = `A passionate developer focused on crafting innovative solutions.`;
  
  return (
    <main className="w-full min-h-screen relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/MainSection.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4">

          {/* Text Content - Centered on mobile, left-aligned on desktop */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-2 md:space-y-8 mx-auto text-center lg:text-left">
            <span className="block text-xl md:text-2xl font-bold text-yellow-50 lg:mr-72 mt-6">
              Hey there👋, I'm
            </span>

            <TypingText
              text="Omkar Kathile"
              speed={120}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent mx-auto lg:mx-0"
            />
            
            <div className="px-2 sm:px-0">
              <TextGenerateEffect 
                duration={5} 
                filter={false} 
                words={words}
                className="text-base text-center lg:text-left"
              />
            </div>
          </div> 
    
          {/* Monitor Image - Centered */}
          <div className="w-full lg:w-1/2 p-4 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/monitor3.png"
                alt="Monitor"
                width={600}
                height={350}
                className="w-full h-auto object-contain"
              />
              <WordRotate
                className="absolute top-1/3 md:top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-lime-400 bg-clip-text text-transparent"
                words={[
                  "TechEnthusiast",
                  "FullStackDeveloper",
                  "BackendDeveloper",
                  "FrontendDeveloper",
                  "AI Enthusiast",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
