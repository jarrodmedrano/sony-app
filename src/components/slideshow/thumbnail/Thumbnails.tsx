import "./thumbnails.css";

function Thumbnails({
  handleThumbClick,
  index,
  src,
  activeId,
}: {
  handleThumbClick: (index: number) => void;
  index: number;
  src: string;
  activeId: number;
}) {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    handleThumbClick(index);
  };
  return (
    <li className={activeId === index ? "active" : ""}>
      <button className="" onClick={handleClick}>
        <img src={src} className="rounded" />
      </button>
    </li>
  );
}

export default Thumbnails;
