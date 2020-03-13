import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css';
import CardOne from '../Img/sweater.jpg'
import CardTwo from '../Img/boots.jpg'
import CardThree from '../Img/shoes.jpg'


export default function HomePageContent() {
    return (
        <div>
            <Container>
                <h3>For Men</h3>
                <Row className="mb-2">
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardOne} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardTwo} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardThree} />
                            <Card.Body>
                                <Card.Title>Shoes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <h3>For Women</h3>
                <Row className="mb-2">
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardOne} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardTwo} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardThree} />
                            <Card.Body>
                                <Card.Title>Shoes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <h3>For Children</h3>
                <Row className="mb-2">
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardOne} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardTwo} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={CardThree} />
                            <Card.Body>
                                <Card.Title>Shoes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">See Collection</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}