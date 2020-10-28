import React, {Component} from 'react';
import data from "../data";
import Fullpage from "../components/Fullpage";
import './style/AboutSection.css';
import {Element} from 'react-scroll'


class AboutSection extends Component{
    render() {
        return (

            <div style={{backgroundColor:this.props.backgroundColor}} >
                <Element name="about" className="element"> </Element>
                <Fullpage className="fullpage second">
                    <h1 style={{color:this.props.color}}>
                        {data.sections[0].title}
                    </h1>
                    <div className="paragraphs">
                        {data.sections[0].items.map(p =>{
                            return <p>{p.content}</p>;
                        })
                        }
                    </div>
                </Fullpage>
            </div>
        )
    }

}
export default AboutSection