import React from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'
import bagOne from '../Img/bag1.jpg';
import bagTwo from '../Img/bag2.jpg';
import bagThree from '../Img/bag3.jpg';
import scarfOne from '../Img/scarf1.jpg';
import scarfTwo from '../Img/scarf2.jpg';
import scarfThree from '../Img/scarf3.jpg';
import jeansOne from '../Img/jeans1.jpg';
import jeansTwo from '../Img/jeans2.jpg';
import jeansThree from '../Img/jeans3.jpg';

export default function ForWomanComponent() {
    return (
        <div>
            <Container>
            <h3>BAG</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bagOne} />
                            <Card.Body>
                                <Card.Title>BAG</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bagTwo} />
                            <Card.Body>
                                <Card.Title>BAG</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bagThree} />
                            <Card.Body>
                                <Card.Title>BAG</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3>Jeans</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={scarfOne} />
                            <Card.Body>
                                <Card.Title>Jeans</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={scarfTwo} />
                            <Card.Body>
                                <Card.Title>Jeans</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={scarfThree} />
                            <Card.Body>
                                <Card.Title>Jeans</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                     </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3>Scarf</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={jeansOne} />
                            <Card.Body>
                                <Card.Title>Scarf</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={jeansTwo} />
                            <Card.Body>
                                <Card.Title>Scarf</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={jeansThree} />
                            <Card.Body>
                                <Card.Title>Scarf</Card.Title>
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