import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import the Header, Footer, and pages
import Header from './src/include/theheader';
import Footer from './src/include/thefooter';
import Home from './src/pages/home';
import About from './src/pages/about';
import Contact from './src/pages/contact';
import NotFound from './src/pages/notfound';

function App() {
  return (
    <Router> {/* HashRouter does not require basename */}     
        <Header />       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          </Routes>        
        <Footer />      
    </Router>
  );
}

export default App;
