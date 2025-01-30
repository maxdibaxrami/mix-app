
import { AnimatePresence, motion } from "framer-motion"
 
export function RotateWords({
  words
}: {
  words: string
}) {
 
return (
 
<div className="font-bold ml-1 text-inherit text-center font-bold tracking-tighter  md:leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5">

  <AnimatePresence mode="wait">
    <motion.p
      key={words}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.1 }}
    >
      {words}
    </motion.p>
  </AnimatePresence>
</div>
) }