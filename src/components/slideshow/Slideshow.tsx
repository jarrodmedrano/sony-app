import Slide from "./slide/Slide";
import Thumbnails from "./Thumbnails";
import slides from "./__mock__/slides.json";
import { useState } from "react";

export interface SlideProps {
  id: string;
  url: string;
  title: string;
  description: string;
  cta: string;
  subtitle: string;
  button: string;
  bg: string;
  thumbnail: string;
  popout?: string;
}

function Slideshow() {
  const [activeId, setActiveId] = useState(0);
  const [slide, setSlide] = useState<SlideProps>(slides[0]);

  const handleClick = (id: number) => {
    setSlide(slides[id]);
    setActiveId(id);
  };

  return (
    <div className="slideshow">
      <Slide slide={slide} />
      <div className="container">
        <div className="thumbnails">
          <ul className="grid grid-cols-3 gap-x-3 gap-y-2 md:grid-cols-6">
            {slides.map((slide: SlideProps, index) => {
              const { id, thumbnail } = slide;
              return (
                <Thumbnails
                  key={id}
                  handleThumbClick={handleClick}
                  src={thumbnail}
                  index={index}
                  activeId={activeId}
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
