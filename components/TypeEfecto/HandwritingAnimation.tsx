import React, { useState, useEffect } from "react";
import H2 from "../html/H2";

const HandwritingAnimation = ({ words }: { words: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [delay, setDelay] = useState(2000); // 2 segundos de retraso después de escribir cada letra

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentText = text;
      if (isDeleting) {
        currentText = currentText.slice(0, -1);
      } else {
        currentText = words[currentIndex].substring(0, currentText.length + 1);
      }

      setText(currentText);

      // Speed up typing when deleting
      if (isDeleting) {
        setSpeed(10);
      } else {
        setSpeed(50);
      }

      // Start deleting when text is fully typed
      if (!isDeleting && currentText === words[currentIndex]) {
        setIsDeleting(true);
        setSpeed(delay); // Set the speed to delay after fully typing the word
      }

      // Move to next word when deletion is complete
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSpeed(100); // Reset the speed back to typing speed after deletion
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, words, speed, delay]);

  return (
    <div className=" hans-font">
      <span className={"block"}>
        <H2 size="medium" className="text-white/90 font-medium">
          {text}
          <span className="animate-blink">|</span>
        </H2>
      </span>

      {/* <span>Un bit a la vez</span> */}
    </div>
  );
};

export default HandwritingAnimation;
