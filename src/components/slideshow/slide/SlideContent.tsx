import { SlideProps } from "../types";

function SlideContent(props: SlideProps) {
  const { button, cta, description, subtitle, title, url } = props;
  return (
    <div className="slideshow-banner__wrapper">
      <div className="content">
        <p className="text-left uppercase more-from w-32 md:w-60">{subtitle}</p>
        <a href={url} target="_blank">
          <button
            type="button"
            className="border border-white text-white py-1 rounded-full uppercase rounded-accent"
          >
            {button}
          </button>
        </a>
        <h1 className="font-bolder text-white text-3xl mb-8 uppercase main-title">
          {title}
        </h1>

        <p className="paragraph font-semibold">{description}</p>
        <a href={url} target="_blank">
          <button className="bg-white text-black px-5 py-3 md:py-4 rounded-full font-bolder hover:bg-gray-100 uppercase cta">
            {cta}
          </button>
        </a>
      </div>
    </div>
  );
}

export default SlideContent;
