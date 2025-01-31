import Slide from "./slide/Slide";
import Thumbnails from "./thumbnail/Thumbnails";
import slideshowData from "./__mock__/slides.json";
import { useCallback, useEffect, useRef, useState } from "react";
import "./slideshow.css";
import { SlideProps } from "./types";
import { useMaxSlideHeight } from "./hooks/useMaxSlideHeight";

function Slideshow() {
  const [activeId, setActiveId] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const maxHeight = useMaxSlideHeight(slidesRef);

  const updateSlide = useCallback((id: number) => {
    setActiveId(id);
    stopSlideshow();
  }, []);

  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const startSlideshow = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveId(
        (prevActiveId) => (prevActiveId + 1) % slideshowData?.slides.length
      );
    }, 5000);
  }, []);

  useEffect(() => {
    startSlideshow();
    return stopSlideshow;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  const slide = slideshowData?.slides[activeId];
  const preloadSlide =
    slideshowData?.slides[(activeId + 1) % slideshowData?.slides.length]
      .background;

  return (
    <div
      className="slideshow-banner"
      style={{
        minHeight: maxHeight || "auto",
      }}
      aria-roledescription="carousel"
      aria-label="Highlighted features"
    >
      <Slide
        slide={slide}
        style={{ height: maxHeight || "auto" }}
        slideLength={slideshowData?.slides?.length}
        activeId={activeId}
      />
      {slideshowData?.slides?.map((slide: SlideProps, index) => {
        const { title } = slide;
        return (
          <Slide
            ref={(el) => (slidesRef.current[index] = el)}
            key={title}
            slide={slide}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: maxHeight || "auto",
              position: "absolute",
              visibility: "hidden",
            }}
            slideLength={slideshowData?.slides?.length}
            activeId={index}
            isHidden={true}
          />
        );
      })}
      {preloadSlide ? (
        <link rel="prefetch" href={preloadSlide} as="image" />
      ) : null}
      <div className="container">
        <div className="slideshow-banner__thumbnails">
          <ul className="grid grid-cols-3 gap-x-3 gap-y-2">
            {slideshowData?.slides?.map((slide: SlideProps, index) => {
              const { thumbnail, title } = slide;
              return (
                <Thumbnails
                  key={title}
                  handleThumbClick={updateSlide}
                  src={thumbnail}
                  index={index}
                  activeId={activeId}
                  alt={title}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
