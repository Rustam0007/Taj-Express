import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import HomePageContent from '../Components/HomePageContent'
import Footer from '../Components/FooterComponent'

export default function HomePage() {
    return (
        <div>
           <Header />
           <Slider /> <br /> 
           <HomePageContent />
           <Footer />
        </div>
    )
}
