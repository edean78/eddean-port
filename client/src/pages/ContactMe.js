import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';


class ContactMe extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <Form />
                <Footer />
            </div>
        )
    }
}

export default ContactMe;