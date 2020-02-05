import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


class Home extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Home;