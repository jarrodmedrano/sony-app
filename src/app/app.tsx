function App() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="main-thing md:w-full">
          <div className="slideshow">
            <div className="shadow-bg">
              <div className="shadow-div"></div>
              <div className="bg"> </div>
              <img
                className="cutout"
                src="./assets/1-foreground-cutout.png"
                alt="ricobot"
              />
            </div>
            <div className="container">
              <div className="main-content">
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
                    <span className="uppercase">Rico</span> across 50 exciting
                    and diverse worlds, available now on PS5!
                  </p>
                  <a href="https://playstation.com" target="_blank">
                    <button className="bg-white text-black px-5 py-3 md:py-4 rounded-full font-bolder hover:bg-gray-100 uppercase cta">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>

              <div className="thumbnails">
                <ul className="grid grid-cols-3 gap-x-3 gap-y-2 md:grid-cols-6">
                  <li>
                    <button className="rounded">
                      <img src="/assets/1-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                  <li>
                    <button className="rounded">
                      <img src="/assets/2-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                  <li>
                    <button className="rounded">
                      <img src="/assets/3-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                  <li>
                    <button className="rounded">
                      <img src="/assets/4-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                  <li>
                    <button className="rounded">
                      <img src="/assets/5-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                  <li>
                    <button className="rounded">
                      <img src="/assets/6-thumbnail.png" className="rounded" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
