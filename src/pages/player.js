import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';
export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',

        }
    }

    updateState = (e) => {
        this.setState({
            searchText: e
        })
    }

    searchPlayer = () => {


    }

    render() {
        return (
            <>
                <InputGroup>
                    <FormControl
                        name="name"
                        placeholder="Player Name"
                        aria-label="Recipient's username with two button addons"
                        onChange={ (e) => this.updateState(e) }
                    />

                    <Button onClick={ () => this.addPlayer() }>Add Player</Button>
                </InputGroup>
                <br />
                <InputGroup>
                    <FormControl
                        name="search_name"
                        placeholder="Player Name"
                        aria-label="Recipient's username with two button addons"
                        onChange={ (e) => this.updateState(e) }
                    />

                    <Button onClick={ () => this.searchPlayer() }>Search Player</Button>
                </InputGroup>

            </>
        )
    }

}

