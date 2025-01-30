import "./thumbnails.css";

function Thumbnails({
  handleThumbClick,
  index,
  src,
  activeId,
  alt,
}: {
  handleThumbClick: (index: number) => void;
  index: number;
  src: string;
  activeId: number;
  alt: string;
}) {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleThumbClick(index);
  };
  return (
    <li
      className={
        activeId === index ? "slideshow-banner__thumbnails--active" : ""
      }
    >
      <button onClick={handleClick} aria-label="thumbnail">
        <img src={src} className="rounded" alt={alt} width="90" height="90" />
      </button>
    </li>
  );
}

export default Thumbnails;
