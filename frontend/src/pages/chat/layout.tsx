//import { useViewportHeightContext } from '@/veiwPortContext';

import useViewportHeight from "@/hooks/useViewPortHook";


export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const height = useViewportHeight()

  //const viewportHeight = useViewportHeightContext();
  return (
    <section 
        style={{
          height:`${height}px`,
          transition: 'height 0.3s ease',
          display: 'flex',
          paddingBottom:"1rem",
          position:"relative",
          flexDirection: 'column',
          overflow:"hidden",
        }}
        >            
      {children}
    </section>
  );
}