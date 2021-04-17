import React, { useState } from "react";
import Button from "react-bootstrap/Button"; 
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Search() {

    const [clicked, setClicked] = useState(false);

    const [formResults, setFormResults] = useState({
        "searchOption": "text", 
        "searchInput": null
    });

    function handleSearch() {
        setClicked(true);
    }

    function handleClose() {
        setClicked(false)
    }

    function handleSubmit() {
        handleClose();
    }

    function handleChange(event) {
        if (event.target.type === "radio") {
            setFormResults({
                ...formResults, 
                "searchOption": [event.target.id],
            });
        } 
        if (event.target.type === "text") {
            setFormResults({
                ...formResults, 
                "searchInput": [event.target.value], 
            });
        }
    }

    return(
        <>
            <Button onClick={handleSearch}>Search</Button>

            <Modal show={clicked} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="searchInput" as={Row}>
                            <Col sm={4}>
                                <Form.Label>Search</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="text" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="searchOptions" as={Row} onChange={handleChange}>
                            <Col sm={4}>
                                <Form.Label>Search by...</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Check type="radio" label="Name" inline name="searchOptionRadio" id="nameSearchOption" value="text" defaultChecked />
                                <Form.Check type="radio" label="Height" inline name="searchOptionRadio" id="heightSearchOption" value="number" />
                                <Form.Check type="radio" label="Weight" inline name="searchOptionRadio" id="weightSearchOption" value="number" />
                                <Form.Check type="radio" label="Pokedex Number" inline name="searchOptionRadio" id="numberSearchOption" value="number" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{span: 8, offset: 4}}>
                                <Button onClick={handleSubmit}>Search</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Search;