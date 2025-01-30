import { AnimatePresence, motion } from "motion/react";
function SlideImage({
  bg,
  popout,
  popoutAlt,
}: {
  bg: string;
  popout?: string;
  popoutAlt?: string;
}) {
  return (
    <div className="slideshow-banner__gradient-wrap">
      <div className="slideshow-banner__gradient"></div>
      <div className="slideshow-banner__bgwrap">
        <div
          className="slideshow-banner__bgimage"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>

      {popout ? (
        <AnimatePresence>
          <motion.img
            initial={{ opacity: 0, top: 100 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 2, top: 100 }}
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
