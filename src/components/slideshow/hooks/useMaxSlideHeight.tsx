import { useEffect, useState } from "react";

export function useMaxSlideHeight(
  slidesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      const isWideScreen = window.matchMedia("(min-width: 900px)").matches;

      if (isLandscape && isWideScreen && slidesRef.current.length) {
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
  }, [slidesRef]);

  return maxHeight;
}
