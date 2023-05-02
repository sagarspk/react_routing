import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./pages/About";
import {Home} from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewBook from "./pages/NewBook";
import Book from "./pages/Book.js";
import BookList from "./pages/BookList";




function App() {
  return (
    <>
    <p>Hello</p>
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/book">books</Link></li>
      <li><Link to="/booklist">BookList</Link></li>
      <li><Link to="/newboks">newboks</Link></li>
      <li><Link to="/notfound">notfound</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/newbooks" element={<NewBook />} />
        <Route path="/notfound" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
