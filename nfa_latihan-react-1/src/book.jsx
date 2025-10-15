import "./App.css";

function BookThumbCard({ book }) {
  if (!book) return null;

  const { title, author, description, year, image } = book;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div id="image" className="text-bg-secondary card-img-top" style={{ height: "225px" }}>{image}</div>
        <div className="card-body">
          <h5 id="title" className="card-title">{title}</h5>
          <p id="author" className="card-subtitle text-body-secondary">{author}</p>
          <p id="year" className="card-subtitle text-body-secondary mb-2">{year}</p>
          <p id="description" className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm btn-outline-secondary" type="button">Details</button>
            <button className="btn btn-sm btn-primary" type="button">Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookThumbCard;