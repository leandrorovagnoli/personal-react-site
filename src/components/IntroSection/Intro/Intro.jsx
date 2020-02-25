import React from 'react';
import './styles.css';


export default (props) =>
    (
        <React.Fragment>
            <div className='center-middle flex-column'>
                <h1 className="font-cursive main-heading big">Hello, I'm {props.name}</h1>
                <h3 className="font-mono sub">
                    {
                        props.titles.map((title, index) =>
                            props.titles.length - 1 === index ? title : title + ' | '
                        )
                    }
                </h3>
            </div>
            <div className="center-middle btn-container">
                <a className="btn-link" href={props.resumeLink}
                    target="_blank" rel="noopener noreferrer">
                    <button className="download-button font-mono">Download Resume</button>
                </a>
            </div>
        </React.Fragment>
    )