import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavList = (props) => {
    return (
        <Container>
            <a href={props.ref} >
            <li>
                <Link to={props.path}>{props.title}</Link>
            </li>
            </a>
        </Container>
    )
}

const Container = styled.div`

   
a{
    text-decoration:none;
    color: #474747;
    font-family: forma-djr-text,serif;
    
    
}

li {
    list-style-type: none;
    font-family: forma-djr-text,sans-serif;
    font-size:10px;
    font-weight: 500;
    line-height:18px;
    color:#ececec;
    letter-spacing:1.94px;
    margin-bottom:10px;
    text-align:right;
    padding-right: 100px;
    
}`



export default NavList;