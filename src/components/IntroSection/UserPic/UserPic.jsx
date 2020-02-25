import React from 'react';
import './styles.css';


const UserPic = (props) => {
    return (
        <div className="pic-container center-middle">
            <img src={props.image} alt='pro-pic' className="profile-pic" />
        </div>
    )
}

export default UserPic;