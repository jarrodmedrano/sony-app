import { forwardRef } from "react";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";
import { SlideProps } from "../types";

const Slide = forwardRef<HTMLDivElement, SlideProps>(
  ({ slide, slideLength, activeId, style, isHidden }, ref) => {
    const {
      background = "",
      cutout = "",
      cutoutAlt = "",
      backgroundAlt = "",
    } = slide;
    return (
      <div
        className="slideshow-banner__slide"
        aria-roledescription="slide"
        aria-label={`${activeId + 1} of ${slideLength}`}
        role="group"
        style={style}
        ref={ref}
        aria-hidden={isHidden}
      >
        <SlideImage
          bgAlt={backgroundAlt}
          cutout={cutout}
          isHidden={isHidden}
          background={background}
          cutoutAlt={cutoutAlt}
        />
        <div className="container">
          <SlideContent slide={slide} />
        </div>
      </div>
    );
  }
);

export default Slide;
