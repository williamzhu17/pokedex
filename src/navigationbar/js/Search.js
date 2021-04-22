import React, { useState } from "react";
import Button from "react-bootstrap/Button"; 
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { capitalizeFirstLetter } from "../../capitalizeFirstLetter.js";

function Search(props) {
    return(
        <>
            <Modal show={props.searchParameters.searchBoxOpen} onHide={props.closeSearchBox}>
                <Modal.Header closeButton>
                    <Modal.Title>Search {capitalizeFirstLetter(props.searchParameters.searchType)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="searchInput" as={Row}>
                            <Col sm={4}>
                                <Form.Label>Search</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control 
                                    type="text" 
                                    value={props.searchParameters.searchInput} 
                                    onChange={props.handleChange} 
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="searchOptions" as={Row} onChange={props.handleChange}>
                            <Col sm={4}>
                                <Form.Label>Search by...</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Check 
                                    type="radio" 
                                    label="Name" 
                                    inline 
                                    name="searchOptionRadio" 
                                    id="nameSearchOption" 
                                    value="name" 
                                    checked={props.searchParameters.searchType === "name"} 
                                />
                                <Form.Check 
                                    type="radio" 
                                    label="Pokedex Number" 
                                    inline 
                                    name="searchOptionRadio" 
                                    id="numberSearchOption" 
                                    value="number"
                                    checked={props.searchParameters.searchType === "number"}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{span: 8, offset: 4}}>
                                <Button onClick={props.onSubmit}>Search</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Search;