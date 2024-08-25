import React, { useState, useEffect } from "react";

const words = ["Easy", "Powerful", "Intuitive"];

const useTextAnimation = (text: string, isVisible: boolean) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let textTimeoutId: NodeJS.Timeout;
    let cursorTimeoutId: NodeJS.Timeout;

    if (isVisible) {
      const animateIn = (index: number) => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          textTimeoutId = setTimeout(() => animateIn(index + 1), 250); // Typing speed
        } else {
          textTimeoutId = setTimeout(animateOut, 100); // Pause before animating out
        }
      };

      const animateOut = () => {
        const outAnimation = (index: number) => {
          if (index >= 0) {
            setDisplayText(text.slice(0, index));
            textTimeoutId = setTimeout(() => outAnimation(index - 1), 250); // Deleting speed
          }
        };
        outAnimation(text.length);
      };

      animateIn(0);

      // Cursor blinking logic
      // const blinkCursor = () => {
      //   setCursorVisible((prev) => !prev);
      //   cursorTimeoutId = setTimeout(blinkCursor, 500); // Cursor blink speed
      // };

      // blinkCursor();
    } else {
      setDisplayText("");
    }

    return () => {
      clearTimeout(textTimeoutId);
      clearTimeout(cursorTimeoutId);
    };
  }, [text, isVisible]);

  return { displayText };
};

export default function AnimatedText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];
  const [isCursorVisible, setCursorVisible] = useState(true);
  const { displayText } = useTextAnimation(currentWord, true);

  useEffect(() => {
    const wordDuration = currentWord.length * 500 + 1000; // Time to animate in, pause, and animate out
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, wordDuration);

    return () => clearTimeout(timeoutId);
  }, [currentWord]);

  useEffect(() => {
    if (displayText == "") setCursorVisible(false);
    else setCursorVisible(true);
  }, [displayText]);

  // return (
  //   <div className="flex items-center justify-center">
  //     <div
  //       className="ml-1 lg:text-[80px] md:text-[68px] font-thin font-ttfir text-center flex text-[#E52D27]"
  //       aria-live="polite"
  //       aria-atomic="true"
  //     >
  //       <span className="transition-char-opacity duration-500 ease-in-out">
  //         {displayText}
  //       </span>
  //       {isCursorVisible && (
  //         <span className="animate-blink font-normal  text-white">|</span>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className="text-[#E52D27]" aria-live="polite" aria-atomic="true">
      <span className="transition-opacity duration-500 ease-in-out">
        {displayText}
      </span>
      {isCursorVisible && <span className="animate-blink text-white">|</span>}
    </div>
  );
}

