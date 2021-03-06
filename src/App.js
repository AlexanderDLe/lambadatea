import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/about/About';
import Footer from './components/layout/Footer';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Navbar />
                    <Landing />
                    <About />
                    <Gallery />
                    <Contact />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
