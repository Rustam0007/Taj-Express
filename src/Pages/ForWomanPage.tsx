import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForWomanComponent from '../Components/ForWomanComponent'
import Header from '../Components/Header'
import Footer from '../Components/FooterComponent'

export default function ForWomanPage() {
    return (
        <div>
            <Header />
            <ForWomanComponent />
            <Footer />
        </div>
    )
}