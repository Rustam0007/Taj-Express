import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Col, Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../App.css';


export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Col md={8}>
                        <Navbar.Brand className="ml-sm-5"><Link to="/#" className="menu-name"><h3>Taj-Express</h3></Link></Navbar.Brand>
                    </Col>
                    <Col md={4}>
                        <Form inline className="justify-content-center">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Col>
                </Container>
            </Navbar>
            <div className="navBg">
                <Nav as="ul" className="justify-content-center" >
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/#" className="menu-name">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-men" className="menu-name">For Men</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-women" className="menu-name">For Women</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-children" className="menu-name">For Children</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/about" className="menu-name">About Us</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}