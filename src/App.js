import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your actual page components
import Home from './pages/home';
import About from './pages/about';
import Sermons from './pages/surmons';
import Ministry from './pages/ministries';
import Give from './pages/give';

// Import the new page components for ministry
import WomenChildren from './pages/women_children';
import RhemaCollege from './pages/Rhema_college';
import InreachOutreach from './pages/inreach_outreach';
import MediaCommunication from './pages/media';
import HelpDirectorate from './pages/help_directorate';
import GendsMarrieds from './pages/marrieds';
import TheCornet from './pages/the_cornet';

// Import the new pages for About Us and Pastor
import AboutUs from './pages/about_us';
import AboutPastor from './pages/about_pastor'; // Corrected import name

// header and footer components
import Header from './components/header';
import Footer from './components/footer';

// sermons
import AudioSermons from './pages/audio';
import VideoSermons from './pages/video';

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
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/ministry" element={<Ministry />} />
            <Route path="/give" element={<Give />} />

            {/* Routes for the new Ministry pages */}
            <Route path="/women-children" element={<WomenChildren />} />
            <Route path="/rhema-college" element={<RhemaCollege />} />
            <Route path="/inreach-outreach" element={<InreachOutreach />} />
            <Route path="/media-communication" element={<MediaCommunication />} />
            <Route path="/help-directorate" element={<HelpDirectorate />} />
            <Route path="/gends-marrieds" element={<GendsMarrieds />} />
            <Route path="/the-cornet" element={<TheCornet />} />

            {/* Routes for About Us and Pastor */}
            <Route path="/about-pastor" element={<AboutPastor />} /> {/* Updated path */}
            <Route path="/about-us" element={<AboutUs />} /> {/* Updated path */}

            {/* Routes for sermons */}
            <Route path="/audio" element={<AudioSermons />} />
            <Route path="/video" element={<VideoSermons />} />
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
