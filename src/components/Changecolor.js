import React, {Component} from 'react';
import data from "../data.json";
import Fullpage from "./Fullpage";


const changeColor = () =>
{
    this.setState({
        color: this.setState.color ==='#B01712'?'#ffffff':'#B01712',
        backgroundColor: this.setState.backgroundColor === '#ffffff'? '#999999':'#ffffff'
    })
    return(
        <Fullpage className="background-section1">
            <h3 className="title1" style={{color:this.props.color}}>{data.sections[0].title}</h3>
            <div className="paragraphs">
                {data.sections[0].items.map(p =>{
                    return <p>{p.content}</p>;
                })}
            </div>
        </Fullpage>
    )
}

export default changeColor