import Slide from "./slide/Slide";
import Thumbnails from "./thumbnail/Thumbnails";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./slideshow.css";
import { SlideData } from "./types";
import { useMaxSlideHeight } from "./hooks/useMaxSlideHeight";
import { useGetSlides } from "../../api/getSlides";

function Slideshow() {
  const { data: slideshowData, isLoading } = useGetSlides();
  const [activeId, setActiveId] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [slide, setSlide] = useState<SlideData | null>(null);

  const updateSlide = useCallback((id: number) => {
    setActiveId(id);
    stopSlideshow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const slideData = slideshowData?.slides;

  useEffect(() => {
    if (slideData && slideData.length > 0) {
      startSlideshow();
    }
    return stopSlideshow;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideData]);

  useEffect(() => {
    setSlide(slideData?.[activeId]);
  }, [slideData, activeId]);

  const startSlideshow = useCallback(() => {
    if (slideData) {
      intervalRef.current = setInterval(() => {
        setActiveId((prevActiveId) => (prevActiveId + 1) % slideData?.length);
      }, 5000);
    }
  }, [slideData]);

  const maxHeight = useMaxSlideHeight(slidesRef, slideData);

  const preloadSlide = useMemo(() => {
    return slideData?.[(activeId + 1) % slideData?.length]?.background;
  }, [slideData, activeId]);

  return isLoading ? (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ) : (
    <div
      className="slideshow-banner"
      style={{
        minHeight: maxHeight || "auto",
      }}
      aria-roledescription="carousel"
      aria-label="Highlighted features"
    >
      {slide ? (
        <Slide
          slide={slide}
          style={{ height: maxHeight || "auto" }}
          slideLength={slideData?.length}
          activeId={activeId}
          title={slideData?.[activeId]?.title}
        />
      ) : null}
      {slideData?.map((slide: SlideData, index: number) => {
        const { title } = slide;
        return (
          <Slide
            ref={(el) => (slidesRef.current[index] = el)}
            key={title}
            slide={slideData?.[index]}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: maxHeight || "auto",
              position: "absolute",
              visibility: "hidden",
            }}
            slideLength={slideData.length}
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
            {slideData?.map((slide: SlideData, index: number) => {
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
