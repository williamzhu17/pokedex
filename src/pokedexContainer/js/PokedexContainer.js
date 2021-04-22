import React from "react";
import PokemonEntryRow from "./PokemonEntryRow.js";

function PokedexContainer(props) {
    let rows = [];

    function createRows(colPerRow) {
        let rowNumber = Math.ceil((props.data.results.length) / colPerRow);

        for (let i = 0; i < rowNumber; i ++) {
            let startRange = i * colPerRow;
            let endRange = i * colPerRow + colPerRow;

            if (endRange > props.data.results.length) {
                endRange = props.data.results.length;
            }
    
            rows.push(
                <PokemonEntryRow key={i} data={props.data.results.slice(startRange, endRange)} colPerRow={props.colPerRow} />
            )
        }
    }

    createRows(props.colPerRow);
    
    return (
        <>
            {rows}
        </>
    );
}

export default PokedexContainer;