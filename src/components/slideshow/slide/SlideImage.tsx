import { AnimatePresence, motion } from "motion/react";
function SlideImage({
  background,
  cutout,
  cutoutAlt,
  bgAlt,
  isHidden,
}: {
  bg?: string;
  cutout?: string;
  cutoutAlt?: string;
  alt: string;
  bgAlt: string;
  isHidden?: boolean;
  background: string;
}) {
  return (
    <div className="slideshow-banner__gradient-wrap">
      <div className="slideshow-banner__gradient"></div>
      <div className="slideshow-banner__bgwrap">
        {background && !isHidden ? (
          <motion.div
            key={background}
            className="slideshow-banner__bgimage"
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ duration: 1, top: 100, ease: "easeInOut" }}
          >
            <figure
              itemType="http://schema.org/ImageObject"
              className="slideshow-banner__figure"
            >
              <picture>
                <img
                  itemProp="image"
                  src={background}
                  alt={bgAlt}
                  width="1168"
                  height="780"
                />
              </picture>
            </figure>
          </motion.div>
        ) : null}
      </div>
      {cutout && !isHidden ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={cutout}
            initial={{ top: 100 }}
            animate={{ top: 0 }}
            transition={{ duration: 2, top: 100, ease: "easeInOut" }}
            className="slideshow-banner__cutout"
            src={cutout}
            alt={cutoutAlt}
          />
        </AnimatePresence>
      ) : null}
    </div>
  );
}

export default SlideImage;
