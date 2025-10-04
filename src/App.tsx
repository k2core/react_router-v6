import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserDetail from './pages/UserDetail';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router v6 실습</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
