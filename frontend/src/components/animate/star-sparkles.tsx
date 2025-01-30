import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: number; // Relative x and y values
  y: number;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesStarTextProps {
  text: ReactElement;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
  onClickGenerate?: () => void; // Callback for generating sparkles
}

const SparklesStarText: React.FC<SparklesStarTextProps> = ({
  text,
  colors = { first: "#FF6B6B", second: "#FFC107" },
  sparklesCount = 5,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateStar = (): Sparkle => {
    const angle = Math.random() * Math.PI * 2; // Random angle in radians
    const distance = Math.random() * 100; // Random distance from center
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const color = Math.random() > 0.5 ? colors.first : colors.second;
    const delay = Math.random() * 2;
    const scale = Math.random() * 2 + 0.5; // Larger scale
    const lifespan = Math.random() * 10 + 5;
    const id = `${x}-${y}-${Date.now()}`;
    return { id, x, y, color, delay, scale, lifespan };
  };

  const initializeStars = () => {
    const newSparkles = Array.from({ length: sparklesCount }, generateStar);
    setSparkles(newSparkles);
  };

  const updateStars = () => {
    setSparkles((currentSparkles) =>
      currentSparkles.map((star) => {
        if (star.lifespan <= 0) {
          return generateStar();
        } else {
          return { ...star, lifespan: star.lifespan - 0.1 };
        }
      }),
    );
  };

  useEffect(() => {
    initializeStars();
    const interval = setInterval(updateStars, 100);
    return () => clearInterval(interval);
  }, [colors.first, colors.second]);

  const addMoreStars = () => {
    const newStars = Array.from({ length: 10 }, generateStar); // Add more sparkles
    setSparkles((prev) => [...prev, ...newStars]);
  };

  return (
    <div
      className="relative"
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      {/* Render the star sparkles in the background */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        {sparkles.map((sparkle) => (
          <StarSparkle key={sparkle.id} {...sparkle} />
        ))}
      </div>

      {/* Render the button or any other content */}
      <div className="relative z-10" onClick={addMoreStars}> {/* Trigger star generation on click */}
        {text}
      </div>
    </div>
  );
};

const StarSparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  const maxScale = 0.5;

  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-0"
      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: [0, x],
        y: [0, y],
        scale: [0, Math.min(scale, maxScale)],
        rotate: [0, 360],
      }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      width="35"
      height="35"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={color}
      />
    </motion.svg>
  );
};

export { SparklesStarText };
