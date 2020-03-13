import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Row, Col, Tab } from 'react-bootstrap'
import Header from '../Components/Header'
import FirstTab from '../Img/company.jpg';
import SecondTab from '../Img/team.jpg';
import ThirdTab from '../Img/contact.jpg';
import FourthTab from '../Img/partner.jpg';

export default function AboutPage() {
    return (
        <div>
            <Header /> <br /><br /><hr />
            <Tab.Container id="left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Our Company History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Our Partner</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h2> Our Story </h2>
                                <p>
                                    History Company exists to offer functional and meaningful products for the home and office inspired by history,
                                    authenticity, and a lasting appreciation for anyone who shares our passion.
                                    Our very first product was an executive chair, crafted in Wayland, New York by the venerable Gunlocke Company,
                                    true to the chair used by President John F. Kennedy at his desk in the White House Oval Office. We ran a little ad in
                                    The Wall Street Journal and in a few months sold these historic chairs to hundreds of homes and offices in cities all
                                    over the country, to celebrities and business leaders at home and abroad.
                                    Over the years we expanded the products we offer to reflect America's deep and rich history, and it's our mission
                                    every day to provide the adventure of shopping for the very best, truly unusual, and most memorable gifts for keeping
                                    or giving.
                                </p>
                                <img
                                    src={FirstTab}
                                    alt="Our Story"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2> Team </h2>
                                <p>
                                    History Company exists to offer functional and meaningful products for the home and office inspired by history,
                                    authenticity, and a lasting appreciation for anyone who shares our passion.
                                    Our very first product was an executive chair, crafted in Wayland, New York by the venerable Gunlocke Company,
                                    true to the chair used by President John F. Kennedy at his desk in the White House Oval Office. We ran a little ad in
                                    The Wall Street Journal and in a few months sold these historic chairs to hundreds of homes and offices in cities all
                                    over the country, to celebrities and business leaders at home and abroad.
                                    Over the years we expanded the products we offer to reflect America's deep and rich history, and it's our mission
                                    every day to provide the adventure of shopping for the very best, truly unusual, and most memorable gifts for keeping
                                    or giving.
                                </p>
                                <img
                                    src={SecondTab}
                                    alt="Team"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h2>Contact: 919-50-20-96</h2>
                                <p>
                                    History Company exists to offer functional and meaningful products for the home and office inspired by history,
                                    authenticity, and a lasting appreciation for anyone who shares our passion.
                                    Our very first product was an executive chair, crafted in Wayland, New York by the venerable Gunlocke Company,
                                    true to the chair used by President John F. Kennedy at his desk in the White House Oval Office. We ran a little ad in
                                    The Wall Street Journal and in a few months sold these historic chairs to hundreds of homes and offices in cities all
                                    over the country, to celebrities and business leaders at home and abroad.
                                    Over the years we expanded the products we offer to reflect America's deep and rich history, and it's our mission
                                    every day to provide the adventure of shopping for the very best, truly unusual, and most memorable gifts for keeping
                                    or giving.
                                </p>
                                <img
                                    src={ThirdTab}
                                    alt="Contact"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <h2> Partner </h2>
                                <p>
                                    History Company exists to offer functional and meaningful products for the home and office inspired by history,
                                    authenticity, and a lasting appreciation for anyone who shares our passion.
                                    Our very first product was an executive chair, crafted in Wayland, New York by the venerable Gunlocke Company,
                                    true to the chair used by President John F. Kennedy at his desk in the White House Oval Office. We ran a little ad in
                                    The Wall Street Journal and in a few months sold these historic chairs to hundreds of homes and offices in cities all
                                    over the country, to celebrities and business leaders at home and abroad.
                                    Over the years we expanded the products we offer to reflect America's deep and rich history, and it's our mission
                                    every day to provide the adventure of shopping for the very best, truly unusual, and most memorable gifts for keeping
                                    or giving.
                                </p>
                                <img
                                    src={FourthTab}
                                    alt="Partner"
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}