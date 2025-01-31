import { useEffect, useState } from "react";
import { SlideData } from "../types";

export function useMaxSlideHeight(
  slidesRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  slideData: SlideData[]
) {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;

      if (isLandscape && slidesRef.current.length) {
        const heights = slidesRef.current.map(
          (slide) => slide?.offsetHeight || 0
        );
        const tallest = Math.max(...heights);
        setMaxHeight(tallest);
      } else {
        setMaxHeight(null);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [slidesRef, slideData]);

  return maxHeight;
}
