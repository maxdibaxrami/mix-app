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

interface SparklesCustomIconTextProps {
  text: ReactElement;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
  onClickGenerate?: () => void; // Callback for generating sparkles
}

const SparklesFlashIconText: React.FC<SparklesCustomIconTextProps> = ({
  text,
  colors = { first: "#FF6B6B", second: "#FFC107" },
  sparklesCount = 5,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateIcon = (): Sparkle => {
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

  const initializeIcons = () => {
    const newSparkles = Array.from({ length: sparklesCount }, generateIcon);
    setSparkles(newSparkles);
  };

  const updateIcons = () => {
    setSparkles((currentSparkles) =>
      currentSparkles.map((icon) => {
        if (icon.lifespan <= 0) {
          return generateIcon();
        } else {
          return { ...icon, lifespan: icon.lifespan - 0.1 };
        }
      }),
    );
  };

  useEffect(() => {
    initializeIcons();
    const interval = setInterval(updateIcons, 100);
    return () => clearInterval(interval);
  }, [colors.first, colors.second]);

  const addMoreIcons = () => {
    const newIcons = Array.from({ length: 10 }, generateIcon); // Add more sparkles
    setSparkles((prev) => [...prev, ...newIcons]);
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
      {/* Render the custom icon sparkles in the background */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        {sparkles.map((sparkle) => (
          <CustomIconSparkle key={sparkle.id} {...sparkle} />
        ))}
      </div>

      {/* Render the button or any other content */}
      <div className="relative z-10" onClick={addMoreIcons}> {/* Trigger icon generation on click */}
        {text}
      </div>
    </div>
  );
};

const CustomIconSparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
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
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
          clipRule="evenodd"
        />
      </motion.svg>
    );
  };
  

export { SparklesFlashIconText };
