import React, { Component } from 'react';
import Navbar from '../components/Navber/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import API from '../utils/API';



class Portfolio extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.loadProjects();
        console.log(this.state);
    }

    loadProjects = () => {
        API.getProjects()
        .then(res => {
            this.setState({
                projects: res.data,
            })
            console.log(this.sate)
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='App'>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.state.projects.map(product => (
                            <ProjectCard 
                                id={product._id}
                                title={product.title}
                                image={product.image}
                                desc={product.desc}
                                github={product.github}
                            />  
                        ))}
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Portfolio;