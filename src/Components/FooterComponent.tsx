import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css';


export default function FooterComponent() {
    return (
        <div>
            <div className="footer">
                <Nav as="ul" className="justify-content-center" >
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/#" className="menu-name">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-men" className="menu-name">For Man</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-women" className="menu-name">For Woman</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/clothes-for-children" className="menu-name">For Children</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link><Link to="/about" className="menu-name">About Us</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline className="justify-content-center">
                    <FormControl type="text" placeholder="Search" className="mt-sm-2 ml-sm-2" />
                    <Button variant="outline-info" className="mt-sm-2 ml-sm-2">Search</Button>
                </Form>
            </div>
        </div>
    )
}