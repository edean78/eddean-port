import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import API from '../utils/API';



class Portfolio extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: "",
            image: "",
            url: "",
            desc: "",
            github: "",
            projects: [],
            key: ""
        }
        
        this.componentDidMount = this.componentDidMount.bind(this)
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
                        {this.state.projects.map(project => (
                            <ProjectCard 
                                id={project._id}
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                desc={project.desc}
                                github={project.github}
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