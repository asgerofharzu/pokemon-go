import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CardLayout extends Component {

    render() {
        return (
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><h3>Name:{this.props.name}</h3> </Card.Title>
                                <Card.Title> Type: {this.props.type}</Card.Title>
                                <Card.Title> Power: {this.props.power}</Card.Title>
                            </Card.Body>
                            <Card.Img variant="top" width={200} src={this.props.img} />

                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CardLayout;