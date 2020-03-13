import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForManComponent from '../Components/ForManComponent'
import Header from '../Components/Header'
import Footer from '../Components/FooterComponent'


export default function ForManPage() {
    return (
        <div>
            <Header />
            <ForManComponent />
            <Footer />
        </div>
    )
}