import React from 'react';
import styled from 'styled-components'              

const Header = (props) => {
    return (

        <HeaderContainer>

        <HeaderImg className='image-container'>
            <img src={props.headerImage} alt='Header'/>
            <div className='relative-container'>
            <h1>{props.headertitle}</h1>
            <p>{props.headerdescription}</p>
            </div>
        </HeaderImg>

        </HeaderContainer>

        
    )
};

const HeaderContainer = styled.div`



`


const HeaderImg = styled.div`
width: 100%;
height: 400px;


img {
    width:100%;
    height:100%;
    object-fit:cover;
    z-index: 2;
}

@media (max-width: 1000px) {
    height: 300px;
}

`
export default Header;