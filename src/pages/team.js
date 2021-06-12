import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Row, Col, Button, Container, ListGroup, InputGroup, FormControl, Badge } from 'react-bootstrap';

export default class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            searchText: '',
            teams: [],
            selectedTeam: null
        }
        this.addTeam = this.addTeam.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getTeams = this.getTeams.bind(this);
    }

    componentDidMount() {
        this.getTeams();
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    removeTeam(_id) {
        axios.post('/team/remove', { id: _id }).then(res => {
            this.getTeams();
        }).catch(er => {
            console.log(er);
        })
    }

    getTeams = () => {
        axios.get('/team').then(res => {
            let teams = res.data;
            this.setState({
                teams: teams
            });
        }).catch(err => {
            console.log(err);
        });
    }

    addTeam = () => {
        axios.post('/team', {
            name: this.state.name
        }).then(res => {
            console.log(res);
            this.setState({
                addTeamMessage: `Team ${res.data.name} added successfully`,
                addTeamStatus: 'success',
                name: ''
            });
            this.getTeams();
        }).catch(err => {
            console.log(err);
            this.setState({
                addTeamMessage: `Something went wrong ${err.response.data.message}`,
                addTeamStatus: 'danger'
            });
        });
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col>
                        <InputGroup>
                            <FormControl
                                name="name"
                                value={ this.state.name }
                                placeholder="Enter Team Name"
                                aria-label="Add Team"
                                onChange={ (e) => this.updateState(e) }
                            />

                            <Button onClick={ () => this.addTeam() }>Add Team</Button>
                        </InputGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        { this.state.addTeamMessage &&
                            <Alert variant={ this.state.addTeamStatus }>
                                { this.state.addTeamMessage }
                            </Alert>
                        }
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h1><Badge bg="secondary">Teams List</Badge></h1>
                        <ListGroup defaultActiveKey="#link1">
                            {
                                this.state.teams.map((t, i) => {
                                    return (
                                        <ListGroup.Item key={ i } action onClick={ () => { this.setState({ selectedTeam: i }) } }>
                                            <Row>
                                                <Col>
                                                    { t.name }
                                                </Col>
                                                <Col>
                                                    <Button onClick={ () => { this.removeTeam(t._id) } } variant="danger">Remove</Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <ListGroup defaultActiveKey="#link1">
                            {
                                this.state.teams.map((t, i) => {
                                    return (
                                        <ListGroup.Item key={ i } action >
                                            <Row>
                                                <Col>
                                                    { t.name }
                                                </Col>
                                                <Col>
                                                    <Button onClick={ () => { this.removeTeam(t._id) } } variant="danger">Remove</Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container >

        )
    }

}

