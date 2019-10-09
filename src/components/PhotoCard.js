import React from 'react';


const PhotoCard = props => {

    return (
        <div className="photo_card" key={props.index}>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <div className="img-container">
            <img src={props.hdurl} alt="Astrology Photo of the Day"/>
            </div>
            <div className="bottom">
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default PhotoCard;
