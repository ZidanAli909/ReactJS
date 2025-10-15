import { Link } from "react-router";
import BookThumbCard from "./book";
import bookData from "./utils/books";
import { useState } from "react";

function App() {
  const [bookList, setBookList] = useState([...bookData]);

  const handleClick = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "Lorem Ipsum Dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      year: new Date().getFullYear(),
      image: "https://example.com/images/lorem-ipsum-dolor-sit-amet.jpg",
    };

    setBookList((prevBook) => [...prevBook, newBook]);

    alert(`Buku "${newBook.title}" berhasil ditambahkan! Total buku: ${bookList.length + 1}`);
  }

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
              <Link to="/" className="nav-link px-2">Home</Link>
            </li>
            <li>
              <Link to="/books" className="nav-link px-2 link-secondary">Books</Link>
            </li>
            <li>
              <Link to="/team" className="nav-link px-2">Team</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2">Contact</Link>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>
      {/* Books Pages */}
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
              {bookList.map((book) => (
                <BookThumbCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Add Book Pages */}
      <section className="container">
        <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={handleClick}>Add Book</button>
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
