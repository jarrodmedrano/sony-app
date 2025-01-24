import { SlideProps } from "../Slideshow";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

function Slide({ slide }: { slide: SlideProps }) {
  const { bg, popout } = slide;
  return (
    <div className="slide">
      <SlideImage bg={bg} popout={popout} />
      <div className="container">
        <SlideContent {...slide} />
      </div>
    </div>
  );
}

export default Slide;
