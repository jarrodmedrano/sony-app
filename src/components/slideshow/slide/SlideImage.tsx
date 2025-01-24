function SlideImage({ bg, popout }: { bg: string; popout?: string }) {
  return (
    <div className="slideshow-banner__gradient-wrap">
      <div className="slideshow-banner__gradient"></div>
      <div
        className="slideshow-banner__bgimage"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      {popout ? <img className="cutout" src={popout} alt="ricobot" /> : null}
    </div>
  );
}

export default SlideImage;
