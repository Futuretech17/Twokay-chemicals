import React from 'react';
import styled from 'styled-components'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <AboutContainer>
            <Navbar /> 
            <Header 
            headerImage = "./images/aboutus.png"/>
            <BodyContainer>
                <CompanyDescription>
                    <div className='container'>
                    <div className='title'>
                    <h3>Since 1992</h3>
                    </div>
                    <div className='description'>
                    <p>Twokay Chemicals Ltd, established in 1992, has been steadily growing and establishing itself as a leading pharmaceutical distributor and wholesale chemist. With a commitment to providing high-quality pharmaceutical products, medical equipment, and disposables, the company has become a trusted name in the healthcare industry.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Mission:</h3>
                    </div>
                    <div className='description'>
                    <p>At Twokay Chemicals Ltd, our mission is rooted in the belief that business should be conducted with a caring heart. We strive to deliver healthcare solutions with compassion, ensuring that our products positively impact the lives of patients and healthcare professionals alike. Our focus on quality, reliability, and customer satisfaction is driven by a genuine desire to contribute to the well-being of people in Kenya and across the East African region.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Vision:</h3>
                    </div>
                    <div className='description'>
                    <p>Our vision at Twokay Chemicals Ltd is to lead the way as a front-runner in the supply of medical equipment and disposables in Kenya and throughout the East African region. We aim to be the go-to partner for healthcare providers, offering an extensive and diverse range of medical products that meet the highest standards of quality and safety. As a visionary company, we are committed to advancing healthcare accessibility and affordability for all.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Core Values</h3>
                    </div>
                    <div className='description'>
                    <p>At Twokay Chemicals Ltd, we uphold a set of core values that guide every aspect of our business operations:</p>
                    </div>
                    </div>
                    <div className='core-list-container'>
                    <div className='core-list'>
                    <ol>
                        <li>Honesty: We conduct our business with utmost honesty, transparency, and ethical conduct, building trust with our customers and stakeholders.</li>
                        <li>Integrity: We believe in doing what is right, even when faced with challenges, and always act in the best interests of our customers and the community we serve.</li>
                        <li>Service to the People: Our commitment to serving the country's people extends beyond the products we offer. We strive to make a positive impact on society through healthcare initiatives and community engagement.</li>
                        <li>Service to the Workforce: We value our employees and recognize their dedication and contributions. We foster a work environment that nurtures growth, promotes diversity, and encourages innovation.</li>
                    </ol>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Product Portfolio:</h3>
                    </div>
                    <div className='description'>
                    <p>Twokay Chemicals Ltd takes pride in offering a comprehensive product portfolio that includes pharmaceuticals, medical equipment, and disposables. Our range of products caters to the diverse needs of healthcare facilities, medical practitioners, and retailers. We collaborate with reputable manufacturers, ensuring that the products we distribute meet rigorous quality standards and regulatory requirements.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Market Presence:</h3>
                    </div>
                    <div className='description'>
                    <p>Headquartered in Nairobi, Kenya, Twokay Chemicals Ltd has established a strong presence in the Kenyan market and has expanded its reach to serve healthcare providers and partners throughout the East African region. Our strategic distribution network allows us to efficiently deliver products to various healthcare facilities, ensuring timely access to essential medical supplies.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Commitment to Compliance:</h3>
                    </div>
                    <div className='description'>
                    <p>Compliance is of utmost importance at Twokay Chemicals Ltd. We adhere to all relevant local and international regulations, certifications, and guidelines. Our commitment to compliance ensures that the products we distribute are safe, effective, and traceable, providing confidence to our customers and partners.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Future Outlook:</h3>
                    </div>
                    <div className='description'>
                    <p>As we look ahead, Twokay Chemicals Ltd remains dedicated to its mission and vision, striving to be at the forefront of medical supply in Kenya and East Africa. We will continue to invest in cutting-edge technologies, expand our product portfolio, and strengthen our partnerships to enhance the healthcare landscape in the region.</p>
                    </div>
                    </div>
                    <div className='container'>
                    <div className='title'>
                    <h3>Our drive</h3>
                    </div>
                    <div className='description'>
                    <p>At Twokay Chemicals Ltd, we are driven by a caring heart, and our commitment to honesty, integrity, and service guides us in making a meaningful impact on the healthcare industry and the lives of the people we serve.</p>
                    </div>
                    </div>
                </CompanyDescription>
           
            </BodyContainer>
            <Footer />
        </AboutContainer>
    )
};

const AboutContainer = styled.div`


`
const BodyContainer = styled.div`



margin: 100px 200px;
color: black;

@media (max-width: 1000px){
    margin: 20px 20px;
}`

const CompanyDescription = styled.div`
display: flex;
flex-direction: column;

div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
    margin: 10px 0 10px 0;

    p {
        text-align: justify;
        line-height: 25px;
    }

  

}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
    margin: 10px 0 10px 0;

@media (max-width: 1000px){
    display: flex;
    flex-direction: column; 
    padding:0;
}
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color:blue;
    margin-right: 15px;
    opacity: 0.8;
    border-radius: 5px;

    h3 {
        font-family: 'Allura', cursive;
        font-size: 30px;
        color: white;
    }

    @media (max-width:1000px) {
        width: auto;
        margin-right:0;
    }
}

.description {
    width: 60%;
    margin: 20px;

    @media (max-width:1000px){
        width:auto;
        margin-bottom: -35px;
    }
}

.core-list-container {
    display:flex;
    justify-content: center;
    align-items: center;
}
.core-list {
    text-align: justify;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;

    @media (max-width: 1000px){
        width:80%;
        margin-top: -50px;
        margin-bottom: -60px;
    }
    

}

@media (max-width:1000px){
    justify-content: center;
    align-items: center;
}

`

export default About;