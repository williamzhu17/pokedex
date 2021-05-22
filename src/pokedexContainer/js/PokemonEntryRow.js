import React from "react";
import PokemonEntry from "./PokemonEntry.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css/PokemonEntryRow.css";

function PokemonEntryRow(props) {
    let entries = [];

    for (let i = 0; i < props.data.length; i++) {
        entries.push(
            <Col key={i} className="entryCol"><PokemonEntry data={props.data[i]} /></Col>
        );
    }

    if (props.data.length < props.colPerRow) {
        for (let i = props.data.length; i < props.colPerRow; i++) {
            entries.push(
                <Col key={i} className="entryCol"></Col>
            );
        }
    }
    
    return (
        <Row className="entryRow">{entries}</Row>
    );
}

export default PokemonEntryRow;