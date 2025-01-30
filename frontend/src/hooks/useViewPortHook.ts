import { useState, useEffect } from 'react';

const useViewportHeight = (): number => {
  const [viewportHeight, setViewportHeight] = useState<number>(window.visualViewport?.height || window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

      // If viewport height changes significantly (keyboard opened), reset scroll
      if (window.visualViewport?.height && window.visualViewport.height < window.innerHeight) {
        window.scrollTo(0, 0); // Scroll to the top when keyboard opens
        document.getElementById("thisbody").scrollTo(0, 0);
      }

      setViewportHeight(newHeight);
    };

    window.visualViewport?.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
