function Contact() {
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
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
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
      <main className="container">
        <div className="my-4">
          <h1 className="text-center display-2">Contact</h1>
          <p className="lead text-center">
            Any problem? You can contact us through this card here! Tada!
          </p>
        </div>
        <div className="card mx-auto my-3" style={{ maxWidth: "720px", overflow: "hidden" }}>
          <div class="row g-0">
            <div class="col-md-3">
              <img src="img_passphoto.webp" class="img-fluid" alt="Pasfoto" />
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <table class="table table-borderless table-sm table-responsive">
                  <tr>
                    <th scope="row">Nama</th>
                    <td>Ahmad Zidan Ali</td>
                  </tr>
                  <tr>
                    <th scope="row">Tanggal Lahir</th>
                    <td>16 Oktober 2004</td>
                  </tr>
                  <tr>
                    <th scope="row">Asal Kampus</th>
                    <td>Universitas Pembangunan Nasional Veteran Jakarta</td>
                  </tr>
                  <tr>
                    <th scope="row">Kursus</th>
                    <td>Fullstack Web Developer</td>
                  </tr>
                  <tr>
                    <th scope="row">Hobi</th>
                    <td>Komputer</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
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

export default Contact;
