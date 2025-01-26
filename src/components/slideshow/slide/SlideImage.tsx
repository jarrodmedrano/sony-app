import {
  AdvancedImage,
  responsive,
  placeholder,
  lazyload,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

function SlideImage({
  bg,
  popout,
  popoutAlt,
}: {
  bg: string;
  popout?: string;
  popoutAlt?: string;
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "slashclick",
    },
  });
  const myImage = cld.image(popout).format("webp");

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
        <AdvancedImage
          className="cutout"
          src={popout}
          alt={popoutAlt}
          cldImg={myImage}
          plugins={[
            responsive({ steps: [360, 768, 1200] }),
            placeholder(),
            lazyload(),
          ]}
        />
      ) : null}
    </div>
  );
}

export default SlideImage;
