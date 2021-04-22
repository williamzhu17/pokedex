import React from "react";
import PokemonEntry from "./PokemonEntry.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css/PokemonEntryRow.css";

function PokemonEntryRow(props) {
    let entries = [];

    for (let i = 0; i < 6; i++) {
        entries.push(
            <Col key={i} className="entryCol"><PokemonEntry data={props.data[i]} /></Col>
        )
    }
    
    return (
        <Row className="entryRow">{entries}</Row>
    );
}

export default PokemonEntryRow;