import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "Hi, it's Junaed. Welcome!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);

        // Finish progress bar before completing
        const progressInterval = setInterval(() => {
          setProgress((p) => {
            if (p >= 100) {
              clearInterval(progressInterval);
              setTimeout(onComplete, 500);
              return 100;
            }
            return p + 5;
          });
        }, 80);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Typing text */}
      <div className="mb-6 text-2xl md:text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Progress bar */}
      <div className="w-[220px] h-[6px] bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
