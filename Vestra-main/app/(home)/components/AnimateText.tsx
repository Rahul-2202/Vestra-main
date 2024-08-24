// import React, { useState, useEffect } from "react";

// const words = ["Easy", "Powerful", "Intuitive"];

// const useTextAnimation = (text: string, isVisible: boolean) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;
//     if (isVisible) {
//       const animateIn = (index: number) => {
//         if (index <= text.length) {
//           setDisplayText(text.slice(0, index));
//           timeoutId = setTimeout(() => animateIn(index + 1), 150); // Slower animation speed
//         } else {
//           timeoutId = setTimeout(animateOut, 1000); // Pause before animating out
//         }
//       };

//       const animateOut = () => {
//         const outAnimation = (index: number) => {
//           if (index >= 0) {
//             setDisplayText(text.slice(0, index));
//             timeoutId = setTimeout(() => outAnimation(index - 1), 150); // Slower animation speed
//           }
//         };
//         outAnimation(text.length);
//       };

//       animateIn(0);
//     } else {
//       setDisplayText("");
//     }

//     return () => clearTimeout(timeoutId);
//   }, [text, isVisible]);

//   return displayText;
// };

// export default function AnimatedText() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const currentWord = words[currentWordIndex];
//   const displayText = useTextAnimation(currentWord, true);

//   useEffect(() => {
//     const wordDuration = currentWord.length * 300 + 3000; // Adjust duration: animate in, pause, animate out
//     const timeoutId = setTimeout(() => {
//       setTimeout(() => {
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//       }, 200); // 1-second gap before changing words
//     }, wordDuration);

//     return () => clearTimeout(timeoutId);
//   }, [currentWord]);

//   return (
//     <div className="flex items-center justify-center">
//       <div
//         className={`ml-1 text-5xl md:text-[80px] font-bold font-ttfir text-center flex text-[#E52D27] transition-transform duration-1000 ease-in-out`}
//         aria-live="polite"
//         aria-atomic="true"
//       >
//         {/* <span
//           key={index}
//           className="transition-opacity duration-300 ease-in-out"
//           style={{ opacity: index < displayText.length ? 1 : 0 }}
//         > */}
//         {displayText}
//         {/* </span> */}

//         <span className="animate-blink text-white">|</span>
//       </div>
//     </div>
//   );
// }

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
          textTimeoutId = setTimeout(animateOut, 500); // Pause before animating out
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
    const wordDuration = currentWord.length * 300 + 5000; // Time to animate in, pause, and animate out
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, wordDuration);

    return () => clearTimeout(timeoutId);
  }, [currentWord]);

  useEffect(() => {
    if (displayText == "") setCursorVisible(false);
    else setCursorVisible(true);
  }, [displayText]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="ml-1 text-[80px] text-center flex text-[#E52D27]"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="transition-char-opacity duration-500 ease-in-out">
          {displayText}
        </span>
        {isCursorVisible && (
          <span className="animate-blink font-normal  text-white">|</span>
        )}
      </div>
    </div>
  );
}

