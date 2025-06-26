import { useEffect, useState } from "react";

export const useMediaQuery = (maxWidth: number): boolean => {
  const [isLessThan, setIsLessThan] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${maxWidth}px)`;
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setIsLessThan(mediaQueryList.matches);

    updateMatch();
    mediaQueryList.addEventListener("change", updateMatch);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch);
    };
  }, [maxWidth]);

  return isLessThan;
};
