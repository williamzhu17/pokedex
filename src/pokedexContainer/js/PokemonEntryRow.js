import React from "react";
import PokemonEntry from "./PokemonEntry.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PokemonEntryRow(props) {
    let entries = [];

    for (let i = 0; i < 5; i++) {
        entries.push(
            <Col key={i}><PokemonEntry data={props.data[i]} /></Col>
        )
    }
    
    return (
        <Row>{entries}</Row>
    );
}

export default PokemonEntryRow;