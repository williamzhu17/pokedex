import React, { useContext } from "react";
import Button from "react-bootstrap/Button"; 
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { capitalizeFirstLetter } from "../../capitalizeFirstLetter.js";
import { SearchContext } from "../../App.js";

function Search() {
    const {searchParameters, setSearchParameters} = useContext(SearchContext);

    function closeSearchBox() {
        setSearchParameters({
            ...searchParameters, 
            "searchBoxOpen": false,
        });
    }

    function handleChange(event) {
        if (event.target.type === "text") {
            setSearchParameters({
                ...searchParameters, 
                "searchInput": event.target.value,
            });
        }

        if (event.target.type === "radio") {
            setSearchParameters({
                ...searchParameters, 
                "searchType": event.target.value,
            });
        }
    }

    function onSubmit() {
        setSearchParameters({
            ...searchParameters, 
            "searching": true,
            "searchBoxOpen": false, 
        });
    }

    return(
        <>
            <Modal show={searchParameters.searchBoxOpen} onHide={closeSearchBox}>
                <Modal.Header closeButton>
                    <Modal.Title>Search {capitalizeFirstLetter(searchParameters.searchType)}</Modal.Title>
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
                                    value={searchParameters.searchInput} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="searchOptions" as={Row} onChange={handleChange}>
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
                                    checked={searchParameters.searchType === "name"} 
                                />
                                <Form.Check 
                                    type="radio" 
                                    label="Pokedex Number" 
                                    inline 
                                    name="searchOptionRadio" 
                                    id="numberSearchOption" 
                                    value="number"
                                    checked={searchParameters.searchType === "number"}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{span: 8, offset: 4}}>
                                <Button onClick={onSubmit}>Search</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Search;