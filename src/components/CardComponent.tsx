import React from "react";
import { Card } from "../types";

interface CardComponentProps {
  card: Card;
  isDrawing?: boolean;
  animation?: "none" | "toYes" | "toNo";
  isActive?: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  card,
  isDrawing = false,
  animation = "none",
  isActive = true,
}) => {
  const getAnimationClass = () => {
    if (animation === "none") return "";
    if (animation === "toYes") return "animate-slide-to-yes";
    if (animation === "toNo") return "animate-slide-to-no";
    return "";
  };

  // Force animation by adding a key to trigger re-render
  const animationKey = isDrawing ? "drawing" : "static";

  // Debug: Log animation state
  console.log("CardComponent render:", {
    isDrawing,
    animation,
    animationClass: getAnimationClass(),
  });

  return (
    <div
      className="relative"
      style={{
        perspective: "1000px",
        ...(animation === "toYes" && {
          animation: "slideToYes 0.4s ease-in-out forwards",
        }),
        ...(animation === "toNo" && {
          animation: "slideToNo 0.4s ease-in-out forwards",
        }),
      }}
    >
      <div
        className="w-80 h-96 rounded-2xl shadow-2xl border border-white/10 p-2"
        style={{
          transformStyle: "preserve-3d",
          backgroundColor: isActive ? "#141414" : "#0A0A0A", // darker for inactive cards
        }}
      >
        <div className="border-white/10 border p-6 rounded-md h-full">
          {/* Category Tag */}
          <div className="mb-6">
            <span className="inline-block px-2 py-1 text-[10px] font-medium text-white/50 rounded-sm border border-white/10 uppercase tracking-wide">
              {card.category}
            </span>
          </div>

          {/* Main Question */}
          <div className="mb-6">
            <p
              className={`text-xl/7 font-semibold ${
                isActive ? "text-white" : "text-white/50"
              }`}
            >
              {card.question}
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            {card.answer.split("\n").map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/60 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
