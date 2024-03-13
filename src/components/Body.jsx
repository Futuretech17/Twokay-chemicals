import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Body = (props) => {
    console.log(props);;

    return (
        <Bodycard>
        
            <ImageContainer>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button className="button">
                <Link
                    to="/contact" // Update the path to the contact page
                    className="contact-sales-button" // Add a class for styling (optional)
                >
                Contact Sales
                </Link>
                </button>
                {/* <img src={props.img } alt="" /> */}
            </ImageContainer>
            <Content>
                <h2><span>{props.headingPartOne}</span>{props.headingPartTwo}</h2>
                <p>{props.content}</p>         
            </Content>
            

        </Bodycard>
    )
}

const Bodycard = styled.div`
display: flex;
flex-direction: row;
margin: 100px 200px;



img {
    margin-top: 50px;
    max-width:400px;
    height:auto;
  
}

@media (max-width: 1000px) {
    display:flex;
    flex-direction: column;
    margin: 20px 40px;
}

    
`
const Content = styled.div`
    width: 50%;
    color: #033B4A;


h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    font-weight: 200;
    line-height: 35px;
    color: #2a2a2a;
}

P {
 
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size:15px;
    font-weight: 400;
    line-height: 27px;
    text-align: justify;
}

@media (max-width: 1000px) {
    display:flex;
    flex-direction: column;
    margin: 20px 20px;
    width: 90%;

    h2 {
        text-align:center;
        font-size: 25px;
        margin-bottom: 10px;
    }
    
}

`
const ImageContainer = styled.div`
width: 50%;
padding-right: 30px;


h3 {
       font-family: Playfair Display,serif;
       font-weight: 300;
       line-height: 48px;
       font-size: 45px;
       color: #2a2a2a;
      
    }

p {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size:13px;
    font-weight: 400;
    text-align: justify;
    color: #033B4A;
    margin-top: 25px;
    margin-bottom: 25px;

}

.button {
    background-color: white; /* Green */
    border: 2px solid #ffbc01;
    border-radius: 10px;     
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    a {
        color: #4f4f4f; 
    }

  }
 
  .button:hover {
    background-color: #ffbc01;
  } 
  
  @media (max-width: 1000px) { 
    display: flex;
    flex-direction: column;
    Padding: 0;
    width: 100%;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;

    h3 {
        font-size: 35px;
    }
    p {
        text-align: center;
    }
  }
`


export default Body;