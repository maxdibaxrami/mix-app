"use client";
import { motion } from "framer-motion";
import * as React from "react";

export const BlurIn = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: boolean;
}) => {
  const ref = React.useRef(null);

  return (
    <motion.div
      ref={ref}
      animate={data ? { filter: "blur(0px)", opacity: 1 } : {}}
      className="w-full"
      initial={{ filter: "blur(20px)", opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
