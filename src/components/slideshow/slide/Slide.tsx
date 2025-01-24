import { SlideProps } from "../types";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

function Slide({ slide }: { slide: SlideProps }) {
  const { bg, popout, popoutAlt } = slide;
  return (
    <div className="slideshow-banner__slide">
      <SlideImage bg={bg} popout={popout} popoutAlt={popoutAlt} />
      <div className="container">
        <SlideContent {...slide} />
      </div>
    </div>
  );
}

export default Slide;
