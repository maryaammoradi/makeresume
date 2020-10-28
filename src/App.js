import React, {Component} from 'react';
import data from "./data.json";
import {SocialIcon} from "react-social-icons";
import NavBar from "./components/NavBar";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import {Element, Link} from "react-scroll";
import "./components/NavBar.css"
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state ={
            color : '#2c5364',
            backgroundColor:'#ffffff'
        }

    }

    changeColor = () =>{
        this.setState({

            color: this.state.color ==='#2c5364'?'#ffffff': '#2c5364',
            backgroundColor: this.state.backgroundColor === '#ffffff'? '#99f2c8':'#ffffff'

        })
    }

    render() {


        return(
            <div className="App">
                <div className="navigation">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <div className="nav-item">home</div>
                    </Link>
                    <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <div className="nav-item">Skills</div>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <div className="nav-item">About</div>
                    </Link>
                    <div className="color-me" onClick={() =>this.changeColor()}>
                        Change Color
                    </div>
                </div>

                <TitlesAndIcons color={this.state.color} backgroundColor={this.state.backgroundColor} />
                <AboutSection color={this.state.color} backgroundColor={this.state.backgroundColor} />
                <SkillSection color={this.state.color} backgroundColor={this.state.backgroundColor} />
            </div>
        )
    }
}

export default App;