import { AnimatePresence, motion } from "motion/react";
function SlideImage({
  bg,
  popout,
  popoutAlt,
  alt,
}: {
  bg: string;
  popout?: string;
  popoutAlt?: string;
  alt: string;
}) {
  return (
    <div className="slideshow-banner__gradient-wrap">
      <div className="slideshow-banner__gradient"></div>
      <div className="slideshow-banner__bgwrap">
        <div className="slideshow-banner__gradient-wrap_2">
          <motion.div
            key={bg}
            className="slideshow-banner__bgimage"
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ duration: 1, top: 100, ease: "easeInOut" }}
          >
            <figure
              itemType="http://schema.org/ImageObject"
              className="slideshow-banner__figure"
            >
              <img itemProp="image" src={bg} alt={alt} />
            </figure>
          </motion.div>
        </div>
      </div>
      {popout ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={popout}
            initial={{ top: 100 }}
            animate={{ top: 0 }}
            transition={{ duration: 2, top: 100, ease: "easeInOut" }}
            className="cutout"
            src={popout}
            alt={popoutAlt}
          />
        </AnimatePresence>
      ) : null}
    </div>
  );
}

export default SlideImage;
