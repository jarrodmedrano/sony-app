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
  return (
    <li className={activeId === index ? "active" : ""}>
      <button className="rounded" onClick={() => handleThumbClick(index)}>
        <img src={src} className="rounded" />
      </button>
    </li>
  );
}

export default Thumbnails;
