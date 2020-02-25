import React from 'react';
import './styles.css'


export default (props) =>
    <div className="center-middle">
        {
            props.github && 
            <a className="icon" target="_blank" rel="noopener noreferrer" href={props.github}>
                <i className="fab fa-github"></i>
            </a>
        }
        {
            props.facebook &&
            <a className="icon" target="_blank" rel="noopener noreferrer" href={props.facebook}>
                <i className="fab fa-facebook"></i>
            </a>
        }
        {
            props.linkedin &&
            <a className="icon" target="_blank" rel="noopener noreferrer" href={props.linkedin}>
                <i className="fab fa-linkedin"></i>
            </a>
        }
    </div>