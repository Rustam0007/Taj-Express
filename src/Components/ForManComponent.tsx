import React from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'
import bootsOne from '../Img/boots1.jpg';
import bootsTwo from '../Img/boots2.jpg';
import bootsThree from '../Img/boots3.jpg';
import sweaterOne from '../Img/sweater1.jpg';
import sweaterTwo from '../Img/sweater2.jpg';
import sweaterThree from '../Img/sweater3.jpg';
import jeansOne from '../Img/jeans1.jpg';
import jeansTwo from '../Img/jeans2.jpg';
import jeansThree from '../Img/jeans3.jpg';

export default function ForManComponent() {
    return (
        <div>
            <Container>
                <h3>Boots</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bootsOne} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bootsTwo} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bootsThree} />
                            <Card.Body>
                                <Card.Title>Boots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3>Sweater</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sweaterOne} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sweaterTwo} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sweaterThree} />
                            <Card.Body>
                                <Card.Title>Sweater</Card.Title>
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
                            <Card.Img variant="top" src={jeansOne} />
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
                            <Card.Img variant="top" src={jeansTwo}/>
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
                            <Card.Img variant="top" src={jeansThree} />
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

            </Container>
        </div>
    );
}