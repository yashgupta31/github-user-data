import React from "react";
import "./Card.css"

const Card = ({userName, profilePic, profileUrl}) => {
    let follower = Math.floor(Math.random() * 900);
    let following = Math.floor(Math.random() * 90);
    return (
        <>
            <div className="card">
                <img src= {profilePic} alt="userImage" className="user-image" />
                <h3 id="user-name">{userName}</h3>
                <div className="detail-container">
                    <div className="Follower">
                        <spam>Followers</spam>
                        <spam>{follower}k</spam>
                    </div>

                    <div className="Following">
                        <spam>Following</spam>
                        <spam>{following}</spam>
                    </div>
                </div>
                <a href={profileUrl} className="btn" target="_blank"  rel="noreferrer">
                    Visit Profile</a>
            </div>
        </>
    )
}

export default Card;