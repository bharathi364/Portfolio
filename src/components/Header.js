import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.css'
export class Header extends Component {
    render() {
        return (
        <div className="container-fluid navBar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#"><h2>Portfolio</h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                    <Link to="/"><li className="nav-item active"><a className="nav-link text-light" href="#">Home</a></li></Link>
                        <Link to="/about"><li className="nav-item"><a className="nav-link text-light" href="#">About Me</a></li></Link>
                        <Link to="/skills"><li className="nav-item"><a className="nav-link text-light" href="#">Key skills</a></li></Link>
                        <Link to="/education"><li className="nav-item"><a className="nav-link text-light" href="#">Education</a></li></Link>
                        <Link to="/contact"><li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li></Link>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Header
