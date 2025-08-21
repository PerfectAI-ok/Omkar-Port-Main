// Add this above your Home component or in a separate file
'use client'
import { useEffect, useState } from "react";

export const TypingText=({ text, speed = 80, className = "" })=> {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} >{displayed}</span>
  );
}