
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Book from "./pages/Books";
import { books } from "../data";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/"exact component={Home} />
      <Route path="/books" render=() => <Books book={books} />} />
      <Routes path="/books/1" render={() => <BooksInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;