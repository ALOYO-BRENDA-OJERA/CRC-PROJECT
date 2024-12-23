import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your actual page components
import Home from './pages/home';
import About from './pages/about';
import Sermons from './pages/surmons';
import Ministry from './pages/ministries';
import Give from './pages/give';

// header and footer components
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header appears on all pages, including navigation */}
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/give" element={<Give />} />
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
