import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../App.css';
import FirstSlide from '../Img/slide1.jpg';
import SecondSlide from '../Img/slide2.jpg';
import ThirdSlide from '../Img/slide3.jpg';

export default function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cImgHeight"
                        src={FirstSlide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cImgHeight"
                        src={SecondSlide}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cImgHeight"
                        src={ThirdSlide}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}