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
      <div
        className="slideshow-banner__bgimage"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      {popout ? <img className="cutout" src={popout} alt={popoutAlt} /> : null}
    </div>
  );
}

export default SlideImage;
