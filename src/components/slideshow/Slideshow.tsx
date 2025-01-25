import Slide from "./slide/Slide";
import Thumbnails from "./thumbnail/Thumbnails";
import slides from "./__mock__/slides.json";
import { useEffect, useState } from "react";
import "./slideshow.css";
import { SlideProps } from "./types";

function Slideshow() {
  const [activeId, setActiveId] = useState(0);
  const [slide, setSlide] = useState<SlideProps>(slides[0]);
  const [preloadSlide, setPreloadSlide] = useState<string>();

  const handleClick = (id: number) => {
    setSlide(slides[id]);
    setActiveId(id);
  };

  useEffect(() => {
    setSlide(slides[activeId]);
    setPreloadSlide(slides[(activeId + 1) % slides.length].bg);
    const interval = setInterval(() => {
      setActiveId((activeId + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeId]);

  return (
    <div className="slideshow-banner">
      <Slide slide={slide} />
      {preloadSlide ? (
        <link rel="prefetch" href={preloadSlide} as="image" />
      ) : null}
      <div className="container">
        <div className="slideshow-banner__thumbnails">
          <ul className="grid grid-cols-3 gap-x-3 gap-y-2">
            {slides?.map((slide: SlideProps, index) => {
              const { id, thumbnail, title } = slide;
              return (
                <Thumbnails
                  key={id}
                  handleThumbClick={handleClick}
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
