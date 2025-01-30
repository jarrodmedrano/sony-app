import { SlideProps } from "../types";
import { motion } from "motion/react";

function SlideContent(props: SlideProps) {
  const { overline, button, paragraph, headline, title, buttonLink } = props;

  return (
    <div className="slideshow-banner__wrapper">
      <motion.div
        key={title}
        initial={{ opacity: 0, top: 50 }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0, top: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slideshow-banner__content"
      >
        <p className="text-left uppercase slideshow-banner__headline w-32 md:w-60">
          {headline}
        </p>
        <a href={buttonLink} target="_blank">
          <button
            type="button"
            className="border border-white text-white py-1 rounded-full uppercase rounded-accent"
          >
            {overline}
          </button>
        </a>
        <h1 className="font-bolder text-white text-3xl mb-8 uppercase slideshow-banner__main-title">
          {title}
        </h1>

        <p className="slideshow-banner__paragraph font-semibold sm:w-3/4">
          {paragraph}
        </p>
        <a href={buttonLink} target="_blank">
          <button className="bg-white text-black px-5 py-3 md:py-4 rounded-full font-bolder hover:bg-gray-100 uppercase cta">
            {button}
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default SlideContent;
