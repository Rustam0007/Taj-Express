import React from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'
import sneakersOne from '../Img/sneaker1.jpg';
import sneakersTwo from '../Img/sneaker2.jpg';
import sneakersThree from '../Img/sneaker3.jpg';
import toyOne from '../Img/toy1.jpg';
import toyTwo from '../Img/toy2.jpg';
import toyThree from '../Img/toy3.jpg';
import accessoryOne from '../Img/accessory1.jpg';
import accessoryTwo from '../Img/accessory2.jpg';
import accessoryThree from '../Img/jeans3.jpg';

export default function ForChildrenComponent() {
    return (
        <div>
            <Container>
            <h3>Sneakers</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sneakersOne} />
                            <Card.Body>
                                <Card.Title>Sneakers</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sneakersTwo} />
                            <Card.Body>
                                <Card.Title>Sneakers</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sneakersThree} />
                            <Card.Body>
                                <Card.Title>Sneakers</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3>Toy</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={toyOne} />
                            <Card.Body>
                                <Card.Title>Toy</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={toyTwo} />
                            <Card.Body>
                                <Card.Title>Toy</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={toyThree} />
                            <Card.Body>
                                <Card.Title>Toy</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                     </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3>Accessory</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={accessoryOne} />
                            <Card.Body>
                                <Card.Title>Accessory</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={accessoryTwo} />
                            <Card.Body>
                                <Card.Title>Accessory</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={accessoryThree} />
                            <Card.Body>
                                <Card.Title>Accessory</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}