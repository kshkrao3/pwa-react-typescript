import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<About />}>
              
            </Route>
            <Route path="/" element={<Home />}>
              
            </Route>
          </Routes>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
