import "./App.css";

function AlbumSample() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          aria-label="Placeholder: Thumbnail"
          width="100%"
          height="225"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div className="card-body">
          <h5 class="card-title">Buku Lorem Ipsum</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Penulis Lorem Ipsum</h6>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur suscipit veritatis veniam totam perspiciatis aperiam
            blanditiis quasi, vel illo non quo neque laborum.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm btn-outline-secondary" type="button">Details</button>
            <p className="text-body-secondary my-auto">Rp.100.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            href="/">
              <i className="fa-solid fa-book fa-2xl"></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">Home</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">Books</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">Team</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">Contact</a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>
      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to Bookstore!
            </h1>
            <p className="lead">
              Books are windows to the world, and we are here to connect them with people who want to read and write.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              type="button">Register</button>
              <button className="btn btn-outline-secondary btn-lg px-4"
              type="button">Login</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3"
            src="https://picsum.photos/720/480" alt=""
            width="720"/>
          </div>
        </div>
      </div>
      {/* Product Albums */}
      <section>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Many Books Around The World</h1>
              <p className="lead text-body-secondary">
                Check out these cool books that are more pricey because government. Get these books now before they are banned!
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 mx-1">Most Trending</a>
                <a href="#" className="btn btn-secondary my-2 mx-1">Top Seller</a>
                <a href="#" className="btn btn-secondary my-2 mx-1">Top Controversial</a>
                <a href="#" className="btn btn-secondary my-2 mx-1">Just Released</a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <AlbumSample />
              <AlbumSample />
              <AlbumSample />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Books</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Nurul Fikri Academy. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
