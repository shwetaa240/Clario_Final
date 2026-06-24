// src/components/AnimatedHeroText.tsx

import { useState, useEffect } from "react";
import "../ui-enhancements.css"; // Make sure to import this for the cursor

const wordsToType = [
  "Accessibility",
  "Captioning",
  "Translation",
  "Simplicity",
];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY = 2000;

const AnimatedHeroText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % wordsToType.length;
      const fullText = wordsToType[i];

      if (isDeleting) {
        // Deleting
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(DELETING_SPEED);
      } else {
        // Typing
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(TYPING_SPEED);
      }

      // When word is fully typed
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), DELAY);
      } 
      // When word is fully deleted
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
      Real-Time{" "}
      <span className="text-primary">
        {text}
        <span className="type-cursor">|</span>
      </span>{" "}
      for All
    </h1>
  );
};

export default AnimatedHeroText;