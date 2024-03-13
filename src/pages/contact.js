import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';

const Contact = () => {
    return (
        <MainContainer> 
            <Navbar />       
            <Header 
            headerImage = './images/contact-us.png'/>
            <Container>
            <ContactCard 
            Img ='./icons/telephone.png'
            IconTitle = 'Talk to Sales'
            Content = 'Interested in our products? 
            Just pick up the phone to chat with a member of our sales team'
            Contact = '+254714687727'
            />
            <ContactCard 
            Img ='./icons/open.png'
            IconTitle = 'Welcome to Twokay'
            Content = 'Interested to pay us a visit? Come visit us at Kijabe street. We are open from Monday to Friday (8:30 AM - 5:00PM) and on Saturday(8:30 AM - 1:00PM).'
            />
            </Container>
            <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.827273910714!2d36.814550874789305!3d-1.2770769356157299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172dbdb4d485%3A0x1f7dea8116fc9186!2sTwokay%20Chemicals%20Ltd.!5e0!3m2!1sen!2ske!4v1690194226288!5m2!1sen!2ske"/>
                <MapContent>
                    <h3>Location </h3>
                    <p>Twokay Chemicals ltd</p>
                    <p>48 Kijabe St, Nairobi</p>
                    <p>Kenya</p>
                    <h3>Phone / Fax </h3>
                    <p>+254714687727</p>
                    <p><span>Fax: </span>3750249, 315973</p>
                </MapContent>
            </MapContainer>
        
            <Footer />
        </MainContainer>
    )
};

const MainContainer = styled.div`

`
const Container = styled.div`
display: flex;
position: relative;
flex-direction: row;
padding: 0 200px;
justify-content: space-between;
margin: -100px 0 0 0;
z-index: 2;

@media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0 0 0;
    padding: 0 40px;

}` 

const MapContainer = styled.div`
display: flex;
flex-direction: row;
margin: 100px 200px 0 200px;
background-color: #f6f9fc;
border: 1px solid rgb(0, 0, 0, 0.3);

span {
    font-weight: 600;
}

iframe {
    width: 70%;
    height: 500px;
    border: none;
    allowfullscreen: true;
    loading: lazy;
    referrerpolicy: no-referrer-when-downgrade;

    @media (max-width: 1000px){
        width: 100%;
    }
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    color: rgb(59, 94, 103);
};

p {
font-family: 'Poppins', sans-serif;
color: #033B4A;
font-size:15px;
font-weight: 400;
line-height: 27px;
font-wrap: break-word;

};

@media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: 20px 40px;
}
`
const MapContent = styled.div`
diplay: flex;
align-content: space-between;
position: relative;
z-index: 12;
padding: 30px;

@media (max-width: 1000px){
    padding: 10px;

}
`


export default Contact;