import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <CardContainer>
            <img src= {props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </CardContainer>
    )
};

const CardContainer = styled.div`
width: 25%;
height: auto;
padding: 10px;
border-radius: 50px;

img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    background-color: #fff;
    border-radius: 25px;

    &:hover {
        opacity: .5;
        cursor: pointer;
    }
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    font-weight: 200;
    line-height: 35px;
    color: rgb(59, 94, 103);
}

p {
    font-family: 'Poppins', sans-serif;
    color: #033B4A;
    width: 100%;
    font-size:15px;
    font-weight: 400;
    line-height: 27px;
    font-wrap: break-word;
    margin: 10px;
    text-align: center;
}
`

export default Card;