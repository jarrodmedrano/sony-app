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
    hideImage?: boolean;
  } & React.HTMLAttributes<HTMLDivElement>
>(({ slide, ...props }, ref) => {
  const { background, cutout, cutoutAlt, title, backgroundAlt } = slide;
  const { handleMouseEnter, handleMouseLeave, style, hideImage } = props;
  return (
    <div
      className="slideshow-banner__slide"
      aria-roledescription="slide"
      aria-label={title}
      role="group"
      style={style}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SlideImage
        alt={title}
        bgAlt={backgroundAlt}
        bg={!hideImage ? background : undefined}
        cutout={cutout}
        cutoutAlt={!hideImage ? cutoutAlt : undefined}
      />
      <div className="container">
        <SlideContent {...slide} />
      </div>
    </div>
  );
});

export default Slide;
