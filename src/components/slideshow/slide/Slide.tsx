import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

function Slide() {
  return (
    <div className="slide">
      <SlideImage />
      <div className="container">
        <SlideContent />
      </div>
    </div>
  );
}

export default Slide;
