import Slide from "./slide/Slide";
import Thumbnails from "./Thumbnails";

function Slideshow() {
  return (
    <div className="slideshow">
      <Slide />
      <div className="container">
        <Thumbnails />
      </div>
    </div>
  );
}

export default Slideshow;
