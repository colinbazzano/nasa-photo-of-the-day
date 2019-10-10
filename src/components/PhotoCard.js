import React from 'react';
import styled from "styled-components";


const ImgContainer = styled.div`
max-width: 90%;
margin: 1% auto;

`;

const Img = styled.img`
    max-width: 60%;
    height: auto;
    padding: 1%;
    border: 1px solid black;
`;

const Title = styled.h2`
    width: 40%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: slateblue;
    border-radius: 35px;
    margin: 0 auto;
    padding: 1% 0;
    color: papayawhip;
`;

const Date = styled.p`
    width: 10%;
    border-radius: 15px;
    margin: 1% auto;
    background-color: slateblue;
    color: papayawhip;
`;


const Explanation = styled.p`
    width: 80%;
    background-color: papayawhip;
    color: palevioletred;
`;

const PhotoCard = props => {

    return (
        <div className="photo_card" key={props.index}>
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
            <ImgContainer>
            <Img src={props.hdurl} alt="Astrology Photo of the Day"/>
            </ImgContainer>
            <div className="bottom">
                <Explanation>{props.explanation}</Explanation>
            </div>
        </div>
    );
};

export default PhotoCard;
