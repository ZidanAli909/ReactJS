function Team() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
              href="/"
            >
              <i className="fa-solid fa-book fa-2xl"></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>
      {/* Page */}
      <div className="container my-4">
        <h1 className="text-center display-2">Team</h1>
        <p className="lead text-center">
          Some representative placeholder content blablabla...
        </p>
      </div>

      <section className="container" id="team">
        <div class="row">
          <div class="col-lg-4">
            <svg
              aria-label="Placeholder"
              class="bd-placeholder-img rounded-circle"
              height="140"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              width="140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Ahmad Zidan Ali</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              aria-label="Placeholder"
              class="bd-placeholder-img rounded-circle"
              height="140"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              width="140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Zidan Ahmad Ali</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              aria-label="Placeholder"
              class="bd-placeholder-img rounded-circle"
              height="140"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              width="140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Ali Zidan Ahmad</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            © 2025 Nurul Fikri Academy. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Team;
