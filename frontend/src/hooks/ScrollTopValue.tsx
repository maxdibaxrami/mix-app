import { useState, useEffect } from 'react';

function useScrollEnd(delay = 200) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // Clear the previous timeout whenever scrolling occurs
      clearTimeout(timeoutId);

      // Set a timeout to run after the user stops scrolling
      timeoutId = setTimeout(() => {
        setScrollTop(document.querySelector("#chatScrollcontainer").scrollTop); // Update scroll position when scrolling ends
      }, delay);
    };

    document.querySelector("#chatScrollcontainer").addEventListener('scroll', handleScroll);

    // Cleanup the event listener and timeout on component unmount
    return () => {
        document.querySelector("#chatScrollcontainer").removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return scrollTop;
}

export default useScrollEnd;
