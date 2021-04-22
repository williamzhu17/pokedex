import React from "react"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

function PokemonEntryBox(props) {

    return(
        <Modal show={props.clicked} onHide={props.handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img src={props.data.artworkLink} alt={"Picture of " + props.data.name} width="475" height="475" className="pokemonArtwork"/>
                    </Col>
                    <Col>
                        <p className="pokemonInformation">Height: {props.data.height}</p>
                        <p className="pokemonInformation">Weight: {props.data.weight}</p>
                        <p className="pokemonInformation">Type 1: {props.data.firstType}</p>
                        {props.data.secondType === null ? 
                            null : 
                            <p className="pokemonInformation">Type 2: {props.data.secondType}</p>
                        }
                        
                        
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default PokemonEntryBox;