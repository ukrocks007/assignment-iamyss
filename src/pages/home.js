import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import Teams from './team';
import Player from './player';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTeam: false,
            showPlayer: false,
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Roster App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={ () => { this.setState({ showTeam: true, showPlayer: false }) } } href="#teams">Teams</Nav.Link>
                            <Nav.Link onClick={ () => { this.setState({ showTeam: false, showPlayer: true }) } } href="#players">Players</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col>
                            { this.state.showTeam && <Teams /> }
                            { this.state.showPlayer && <Player /> }
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        )
    }

}

