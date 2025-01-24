function SlideImage({ bg, popout }: { bg: string; popout?: string }) {
  return (
    <div className="shadow-bg">
      <div className="shadow-div"></div>
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        {" "}
      </div>
      {popout ? <img className="cutout" src={popout} alt="ricobot" /> : null}
    </div>
  );
}

export default SlideImage;
