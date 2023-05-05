import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewBook from "./pages/NewBook";
import Book from "./pages/Book.js";
import BookList from "./pages/BookList";
import "./App.css";




function App() {
  return (
    <>
    <div className="main_container">
      <div className="navig">
        <nav>
          <div className="nav_list"><Link to="/">Home</Link></div>
          <div className="nav_list"><Link to="/about">About</Link></div>
          <div className="nav_list"><Link to="/contact">Contact</Link></div>
          <div className="nav_list"><Link to="/book">Books</Link></div>
          <div className="nav_list"><Link to="/booklist">BookList</Link></div>
          <div className="nav_list"><Link to="/newbooks">Newbooks</Link></div>
          <div className="nav_list"><Link to="/notfound">Notfound</Link></div>
        </nav>
      </div>
      <div className="Routing_div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/newbooks" element={<NewBook />} />
          <Route path="/notfound" element={<NotFound />} />

        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
