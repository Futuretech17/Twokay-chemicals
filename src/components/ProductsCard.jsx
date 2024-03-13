import React from 'react';
import styled from 'styled-components';

const ProductsCard = (props) => {
    return (
    <Cardcontainer>
        
        <div className="card">
            <img src={props.Img} alt={props.alt} />
            <div className='content-description'>
            <h5 class="card-title">{props.title} </h5>
            <p class="card-text">{props.description} </p> 
            </div>
        </div>
    </Cardcontainer>
)
}

const Cardcontainer = styled.div`
    margin: 0 5px;
    width: 50%;

    img {
        height: 400px;
        object-fit: cover;
    }

    .content-description {
        height: 150px;
    }

    h5{
        text-align: center;
        padding: 5px;

    }

    p {
        text-align: justify;
        margin: 10px;
    }
    
    img:hover {
        opacity: 0.5;
    }

    @media (max-width:1000px) {
        width:100%;
        margin: 0 0 40px 0;

        img {
            height: auto;
        }
    }
`
;



export default ProductsCard;