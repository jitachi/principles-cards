import { useState, useEffect } from "react";
import { Card } from "./types";
import { cards } from "./data/cards";
import CardComponent from "./components/CardComponent";

function App() {
  const [currentCard, setCurrentCard] = useState<Card | null>(cards[0]);
  const [drawnCards, setDrawnCards] = useState<Set<string>>(new Set());
  const [yesCards, setYesCards] = useState<Card[]>([]);
  const [noCards, setNoCards] = useState<Card[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cardAnimation, setCardAnimation] = useState<"none" | "toYes" | "toNo">(
    "none"
  );
  const [activeKey, setActiveKey] = useState<"left" | "right" | null>(null);
  const [flashAnimation, setFlashAnimation] = useState(false);

  const drawToThreeRemaining = () => {
    if (isDrawing) return; // Prevent multiple draws while animating

    console.log("Jumping directly to completion state...");

    // Draw all remaining cards to YES stack instantly
    const availableCards = cards.filter((card) => !drawnCards.has(card.id));

    if (availableCards.length === 0) {
      console.log("No cards remaining");
      return;
    }

    // Add all remaining cards to YES stack and drawn cards
    setDrawnCards((prev) => {
      const newSet = new Set([
        ...prev,
        ...availableCards.map((card) => card.id),
      ]);
      console.log(
        `Added ${availableCards.length} cards, total drawn: ${newSet.size}`
      );
      return newSet;
    });

    setYesCards((prev) => {
      const newYesCards = [...prev, ...availableCards];
      console.log(
        `Added ${availableCards.length} cards to YES stack, total: ${newYesCards.length}`
      );
      return newYesCards;
    });

    // Set current card to null to show completion message
    setCurrentCard(null);
  };

  const drawRandomCard = () => {
    if (isDrawing) return; // Prevent multiple draws while animating

    const availableCards = cards.filter((card) => !drawnCards.has(card.id));

    if (availableCards.length === 0) {
      // Don't reset - keep the last card visible
      setIsDrawing(false);
      return;
    }

    // Pick a random card from available cards
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = availableCards[randomIndex];

    console.log("Drawing random card:", randomCard.category);

    // Show the random card immediately (no animation)
    setCurrentCard(randomCard);
    // Don't add to drawnCards yet - wait for YES/NO decision

    // Reset drawing state after a short delay
    setTimeout(() => {
      setIsDrawing(false);
    }, 100);
  };

  const drawNextCard = (response: "yes" | "no") => {
    if (isDrawing) return; // Prevent multiple draws while animating

    const availableCards = cards.filter((card) => !drawnCards.has(card.id));

    if (availableCards.length === 0) {
      // Don't reset - keep the last card visible and don't change currentCard
      setTimeout(() => {
        setIsDrawing(false);
      }, 300);
      return;
    }

    // Set drawing state immediately to prevent rapid key presses
    setIsDrawing(true);

    // Start the card animation first
    setCardAnimation(response === "yes" ? "toYes" : "toNo");

    // Take the next card (the one already visible below)
    const newCard = availableCards[1]; // This is the card that's already visible below

    // Add current card to appropriate stack and show new card after animation
    setTimeout(() => {
      if (currentCard) {
        if (response === "yes") {
          setYesCards((prev) => {
            const newYesCards = [...prev, currentCard];
            console.log(
              `YES card added: ${currentCard.id}, Total YES: ${newYesCards.length}`
            );
            return newYesCards;
          });
        } else {
          setNoCards((prev) => {
            const newNoCards = [...prev, currentCard];
            console.log(
              `NO card added: ${currentCard.id}, Total NO: ${newNoCards.length}`
            );
            return newNoCards;
          });
          // Trigger flash animation when "no" animation finishes
          setFlashAnimation(true);
          setTimeout(() => setFlashAnimation(false), 200); // Flash duration
        }
      }
      setCardAnimation("none"); // Reset animation state

      // Only show new card if there is one available
      if (newCard) {
        setCurrentCard(newCard);
        setDrawnCards((prev) => {
          const newSet = new Set([...prev, newCard.id]);
          console.log(
            `Card drawn: ${newCard.id}, Total drawn: ${
              newSet.size
            }, Remaining: ${cards.length - newSet.size}`
          );
          return newSet;
        });
      } else {
        // No more cards - show completion message
        setCurrentCard(null);
        console.log("No more cards available - showing completion message");
      }

      // Reset drawing state
      setIsDrawing(false);
    }, 400); // Match the animation duration (0.4s)
  };

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isDrawing) return;

      // Allow key repeat for rapid card progression
      // if (event.repeat) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setActiveKey("right");
          if (currentCard) {
            drawNextCard("yes");
          } else {
            drawNextCard("yes");
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          setActiveKey("left");
          if (currentCard) {
            drawNextCard("no");
          } else {
            drawNextCard("no");
          }
          break;
        case "r":
        case "R":
          // Allow CMD+R or CTRL+R to reload the browser
          if (event.metaKey || event.ctrlKey) {
            return; // Don't prevent default, let browser handle reload
          }
          event.preventDefault();
          drawRandomCard();
          break;
        case "0":
          event.preventDefault();
          drawToThreeRemaining();
          break;
        case " ":
        case "Enter":
          event.preventDefault();
          setActiveKey("right");
          if (!currentCard) {
            drawNextCard("yes");
          }
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        setActiveKey(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isDrawing, currentCard, drawnCards]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isDrawing) return;

      touchEndX = event.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      const minSwipeDistance = 50; // Minimum distance for a swipe

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          // Swipe right = YES
          drawNextCard("yes");
        } else {
          // Swipe left = NO
          drawNextCard("no");
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawing, currentCard, drawnCards]);

  return (
    <div
      className="min-h-screen w-full flex flex-col relative font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] transition-colors duration-500"
      style={{
        backgroundColor: "#000000", // pure black
      }}
    >
      {flashAnimation && (
        <div
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            backgroundColor: "rgba(220, 38, 38, 0.3)",
            animation: "flash 0.2s ease-out",
          }}
        />
      )}

      <header className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-lg font-medium text-white drop-shadow-lg m-0 font-['Inter']">
          Cards against bad quality
        </h1>
      </header>

      <main className="flex-1 flex items-center justify-center p-5 relative pt-0 pb-0">
        {currentCard ? (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Next 3 cards stacked below the current card */}
            {(() => {
              const availableCards = cards.filter(
                (card) => !drawnCards.has(card.id)
              );
              const nextCards = availableCards.slice(1, 4); // Get next 3 cards
              return nextCards.map((card, index) => (
                <div
                  key={`next-${card.id}`}
                  className="absolute"
                  style={{
                    transform: `translateY(${index * 8}px) scale(${
                      index === 0 ? 1 : 0.95 - (index - 1) * 0.02
                    })`,
                    zIndex: 1 - index,
                    opacity: index === 0 ? 1 : 0.7 - (index - 1) * 0.2, // First card (next) has full opacity
                  }}
                >
                  <CardComponent
                    card={card}
                    isDrawing={false}
                    animation="none"
                  />
                </div>
              ));
            })()}

            {/* Current card on top */}
            <div className="relative z-10">
              <CardComponent
                card={currentCard}
                isDrawing={isDrawing}
                animation={cardAnimation}
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              🎉 You've gone through the entire deck, yey!
            </h2>
            <p className="text-xl text-gray-300">
              All {cards.length} design principles evaluated
            </p>
          </div>
        )}
      </main>

      {drawnCards.size === cards.length ? (
        <div className="absolute bottom-[152px] left-1/2 transform -translate-x-1/2 z-10">
          <button
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
            onClick={() => {
              setDrawnCards(new Set());
              setYesCards([]);
              setNoCards([]);
              setCardAnimation("none");
              // Set the first card directly without marking it as drawn yet
              setCurrentCard(cards[0]);
            }}
            disabled={isDrawing}
          >
            Start Again
          </button>
        </div>
      ) : (
        <div className="absolute bottom-[152px] left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          <button
            className={`w-24 bg-gradient-to-br from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              activeKey === "left"
                ? "ring-4 ring-red-300 ring-opacity-75 scale-105"
                : ""
            }`}
            onClick={() => drawNextCard("no")}
          >
            NO
          </button>
          <button
            className={`w-24 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              activeKey === "right"
                ? "ring-4 ring-green-300 ring-opacity-75 scale-105"
                : ""
            }`}
            onClick={() => drawNextCard("yes")}
          >
            YES
          </button>
        </div>
      )}

      <div className="fixed top-1/2 transform -translate-y-1/2 w-screen left-0 right-0 pointer-events-none z-[5] h-[400px]">
        <div className="absolute -left-24 flex flex-col items-center gap-0">
          <h3 className="text-white font-bold text-lg mb-4 drop-shadow-lg absolute left-80 whitespace-nowrap -top-16">
            NO ({noCards.length})
          </h3>
          <div className="relative">
            {noCards.slice(-12).map((card, index) => {
              const totalCards = Math.min(noCards.length, 12);
              return (
                <div
                  key={card.id}
                  className="absolute"
                  style={{
                    transform: `translateY(${
                      (index - (totalCards - 1) / 2) * -80
                    }px) rotate(${
                      (index - (totalCards - 1) / 2) * 3
                    }deg) scale(0.6)`,
                    zIndex: totalCards - index,
                    opacity: 1,
                  }}
                >
                  <CardComponent
                    card={card}
                    isDrawing={false}
                    animation="none"
                    isActive={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute right-48 flex flex-col items-center gap-0">
          <h3 className="text-white font-bold text-lg mb-4 drop-shadow-lg">
            YES ({yesCards.length})
          </h3>
          <div className="relative">
            {yesCards.slice(-12).map((card, index) => {
              const totalCards = Math.min(yesCards.length, 12);
              return (
                <div
                  key={card.id}
                  className="absolute"
                  style={{
                    transform: `translateY(${
                      (index - (totalCards - 1) / 2) * -80
                    }px) rotate(${
                      (index - (totalCards - 1) / 2) * -3
                    }deg) scale(0.6)`,
                    zIndex: totalCards - index,
                    opacity: 1,
                  }}
                >
                  <CardComponent
                    card={card}
                    isDrawing={false}
                    animation="none"
                    isActive={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white font-medium text-sm drop-shadow-lg">
          {cards.length - drawnCards.size} cards remaining
        </div>
      </footer>
    </div>
  );
}

export default App;
