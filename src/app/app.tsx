function App() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="slideshow">
          <div className="shadow">
            <div className="shadow-div"></div>
            <div className="bg"> </div>
          </div>
          <div className="container">
            <div className="main-content">
              <div className="content">
                <p className="text-left uppercase more-from">
                  More from Rico the Dog
                </p>
                <a href="https://sonyplaystation.com" target="_blank">
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
                <img
                  className="cutout"
                  src="./assets/1-foreground-cutout.png"
                  alt="ricobot"
                />
                <p className="paragraph font-semibold">
                  Charge into a brand-new supersized adventure with Rico across
                  50 exciting and diverse worlds, available now on PS5!
                </p>
                <button className="bg-white text-black px-5 py-3 rounded-full font-bolder hover:bg-gray-100 uppercase cta">
                  Learn More
                </button>
              </div>
            </div>

            <div className="thumbnails">
              <ul className="grid grid-cols-3 gap-x-3 gap-y-2">
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
    </main>
  );
}

export default App;
