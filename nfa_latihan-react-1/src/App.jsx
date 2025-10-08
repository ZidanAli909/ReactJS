import './App.css'

function Header() {
  return(
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return(
    <footer>
      <h2>NF Academy</h2>
      <p>Created in React JS</p>
    </footer>
  );
}

function Content() {
  return(
    <h1>Content</h1>
  );
}

function Hello() {
  const nama = "Zidan";
  return(
    <>
      <h2>Hello React!</h2>
      <p>Saya {nama} - Seorang developer fullstack.</p>
    </>
  );
}

function Greeting(props) {
  return (
    <>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
      <p>You live in {props.country}.</p>
    </>
  )
}

function App() {
  return(
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Zidan" />
      <Profile name="Zidan" age={20} country="Indonesia" />
      <Footer />
    </>
  );
}

function Profile(props) {
  return(
    <>
      <h1>{[props.name]}</h1>
    </>
  );
}

export default App
