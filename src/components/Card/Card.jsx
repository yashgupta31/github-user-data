import React from "react";
import "./Card.css"

const Card = ({userName, profilePic, profileUrl}) => {
    return (
        <>
            <div className="card">
                <img src= {profilePic} alt="userImage" className="user-image" />
                <h3 id="user-name">{userName}</h3>
                <a href={profileUrl} className="btn" target="_blank">
                    Visit Profile</a>
            </div>
        </>
    )
}

export default Card;