function Thumbnails() {
  return (
    <div className="thumbnails">
      <ul className="grid grid-cols-3 gap-x-3 gap-y-2 md:grid-cols-6">
        <li className="active">
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
  );
}

export default Thumbnails;
