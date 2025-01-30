import { SlideProps } from "../types";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

function Slide({
  slide,
  handleMouseEnter,
  handleMouseLeave,
}: {
  slide: SlideProps;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) {
  const { bg, popout, popoutAlt, title } = slide;
  return (
    <div
      className="slideshow-banner__slide"
      aria-roledescription="slide"
      aria-label={title}
      role="group"
    >
      <SlideImage alt={title} bg={bg} popout={popout} popoutAlt={popoutAlt} />
      <div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SlideContent {...slide} />
      </div>
    </div>
  );
}

export default Slide;
