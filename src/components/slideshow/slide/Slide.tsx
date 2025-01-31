import { forwardRef } from "react";
import { SlideProps } from "../types";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

const Slide = forwardRef<
  HTMLDivElement,
  {
    slide: SlideProps;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
    slideLength: number;
    activeId: number;
    isHidden?: boolean;
  } & React.HTMLAttributes<HTMLDivElement>
>(({ slide, slideLength, activeId, ...props }, ref) => {
  const { background, cutout, cutoutAlt, title, backgroundAlt } = slide;
  const { handleMouseEnter, handleMouseLeave, style, isHidden } = props;
  return (
    <div
      className="slideshow-banner__slide"
      aria-roledescription="slide"
      aria-label={`${activeId + 1} of ${slideLength}`}
      role="group"
      style={style}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden={isHidden}
    >
      <SlideImage
        alt={title}
        bgAlt={backgroundAlt}
        cutout={cutout}
        isHidden={isHidden}
        background={background}
        cutoutAlt={cutoutAlt}
      />
      <div className="container">
        <SlideContent {...slide} />
      </div>
    </div>
  );
});

export default Slide;
