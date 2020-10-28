import React, {Component} from 'react';
import data from "../data";
import SkillCard from "../components/SkillCard";
import Fullpage from "../components/Fullpage";
import './style/SkillSection.css'
import {Element} from 'react-scroll'



class SkillSection extends Component{
    render() {
        return (
            <div style={{backgroundColor:this.props.backgroundColor}}>
                <Fullpage className="fullpage third">
                    <Element name="skill" className="element"> </Element>
                    <h1 style={{color:this.props.color}}>{data.sections[1].title}</h1>
                        <div className="cards-wrapper">
                            {data.sections[1].items.map(eachSkill => {
                                return(
                                    <SkillCard skill={eachSkill}/>
                                );
                            })}
                        </div>
                </Fullpage>


            </div>
        )
    }

}
export default SkillSection