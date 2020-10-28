import React, {Component} from 'react';
import data from "../data";
import {SocialIcon} from "react-social-icons";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import {Element, Link} from 'react-scroll';
import './style/TitlesAndIcons.css'


class TitlesAndIcons extends Component{
    state={
        color:'black'
    }
    changeColor= () =>{
        this.setState({
            color: this.state.color === 'black' ? '#f7797d' : 'black'
        })
    }
    render() {
        return (
            <div style={{backgroundColor:this.props.backgroundColor}} >
                <Element name="home" className="element"> </Element>
                <Fullpage className="first">
                    <h1 className="title"
                        style={{color : this.state.color}}
                        onMouseOver={()=>{this.changeColor()}}
                        onMouseLeave={()=>{this.changeColor()}}
                    >
                        {data.title}
                    </h1>
                    <div>
                        <h2 className="lead">{data.subtitle}</h2>
                    </div>
                    <div className="icons-wrapper">
                        {Object.keys(data.links).map(key =>{
                            return(
                                <div className="icon">
                                    <SocialIcon url={data.links[key]}/>
                                </div>
                            );
                        }
                        )
                        }
                    </div>
                </Fullpage>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon icon={data.icons.down} onClick={()=> console.log("im working")} />
                </Link>
            </div>
    )
    }

}
export default TitlesAndIcons