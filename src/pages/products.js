import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
// import Body from '../components/Body';

const Product = () => {
    return (
        <div>
        <Navbar />
        <ProductsContainer>
            <Header 
            headerImage='./images/medical-equipment.jpg'/>
            <IntroContainer>
                <h3>Products</h3>
                <p>Specializing in a wide range of non-pharma products and 
                select pharmaceuticals, we are committed to enhancing lives and 
                promoting well-being. With a focus on innovation and quality, we 
                strive to provide effective healthcare solutions to our communities.
                Embrace a healthier future with us as we continue to bring solutions 
                that empower society and promote a healthier, happier life for all. 
                Together, let's build a better world of health and well-being.</p>

            </IntroContainer>

           <NonPharmaContainer>
            <DescripitionContainer>
            <h3><span>Non </span> - Pharmaceuticals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </DescripitionContainer>
            <Card 
            img = './images/surgical-blade.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             <Card 
            img = './images/pregnancy-test-strip.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             <Card 
            img = './images/autoclave-tapes.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             <Card 
            img = './images/feeding-tubes.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             <Card 
            img = './images/folley-catheter.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             <Card 
            img = './images/iv-cannula.png'
            alt='surgical blade'
            content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
             
           </NonPharmaContainer>
            
        </ProductsContainer>
        <Footer />
        </div>
    )
};

const ProductsContainer = styled.div `

h3{
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
}

`
const IntroContainer = styled.div`
display: flex;     
flex-direction: column;
margin: 100px 200px;

`
const NonPharmaContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: row;
padding: 10px 200px;
background-color: #f5f5f5;

`
const DescripitionContainer = styled.div`
padding: 10px 0 10px 0;
text-align: right;
`



export default Product;