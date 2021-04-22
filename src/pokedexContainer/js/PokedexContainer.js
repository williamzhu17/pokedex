import React from "react";
import PokemonEntryRow from "./PokemonEntryRow.js";

function PokedexContainer(props) {
    let rows = [];

    function createRows(colPerRow) {
        let rowNumber = Math.ceil((props.data.results.length) / colPerRow);

        for (let i = 0; i < rowNumber; i ++) {
            let startRange = i * colPerRow;
            let endRange = i * colPerRow + colPerRow;
    
            rows.push(
                <PokemonEntryRow key={i} data={props.data.results.slice(startRange, endRange)} />
            )
        }
    }

    createRows(6);
    
    return (
        <>
            {rows}
        </>
    );
}

export default PokedexContainer;