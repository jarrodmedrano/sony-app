function SlideContent() {
  return (
    <div className="wrapper-content">
      <div className="content">
        <p className="text-left uppercase more-from sm:w-20 md:w-60">
          More from Rico the Dog
        </p>
        <a href="https://playstation.com" target="_blank">
          <button
            type="button"
            className="border border-white text-white py-1 rounded-full uppercase rounded-accent"
          >
            Rico is Back!
          </button>
        </a>
        <h1 className="font-bolder text-white text-3xl mb-8 uppercase main-title">
          Ricobot
        </h1>

        <p className="paragraph font-semibold">
          Charge into a brand-new supersized adventure with{" "}
          <span className="uppercase">Rico</span> across 50 exciting and diverse
          worlds, available now on PS5!
        </p>
        <a href="https://playstation.com" target="_blank">
          <button className="bg-white text-black px-5 py-3 md:py-4 rounded-full font-bolder hover:bg-gray-100 uppercase cta">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default SlideContent;
