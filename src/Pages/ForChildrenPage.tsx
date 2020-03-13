import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForChildrenComponent from '../Components/ForChildrenComponent'
import Header from '../Components/Header'
import Footer from '../Components/FooterComponent'

export default function ForChildrenPage() {
    return (
        <div>
            <Header />
            <ForChildrenComponent />
            <Footer />
        </div>
    )
}