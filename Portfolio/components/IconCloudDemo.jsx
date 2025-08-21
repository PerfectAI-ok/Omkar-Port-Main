import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "java",
  "javascript",
  
  "react",


  "html5",
  "css3",
  "nodejs",
  "express",
  "nextjs",
 ,
 
  "firebase",

  "vercel",
 
  "docker",
  "git",
 
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",

  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
