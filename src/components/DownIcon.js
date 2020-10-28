import React, {Component} from 'react';

const DownIcon=(props) => {
    return(
        <div className="down-icon" onClick={props.onClick}>
            <div style={{maxWidth:'50px'}}>
                <img src={props.icon}  />
            </div>
        </div>
    )
}
export default DownIcon