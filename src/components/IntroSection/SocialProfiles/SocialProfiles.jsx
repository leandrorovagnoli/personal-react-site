import React from 'react';
import './styles.css'


export default (props) =>
    <div class="center-middle">
        {
            props.github && 
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.github}>
                <i class="fab fa-github"></i>
            </a>
        }
        {
            props.facebook &&
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.facebook}>
                <i class="fab fa-facebook"></i>
            </a>
        }
        {
            props.linkedin &&
            <a class="icon" target="_blank" rel="noopener noreferrer" href={props.linkedin}>
                <i class="fab fa-linkedin"></i>
            </a>
        }
    </div>