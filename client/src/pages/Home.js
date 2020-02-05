import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutMe from '../components/AboutMe/AboutMe';


class Home extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <AboutMe />
                <Footer />
            </div>
        )
    }
}

export default Home;