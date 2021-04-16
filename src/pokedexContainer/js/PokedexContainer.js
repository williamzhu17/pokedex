import React from "react";
import PokemonEntryRow from "./PokemonEntryRow.js";

function PokedexContainer(props) {
    let rows = [];
    let rowNumber = Math.ceil((props.data.results.length) / 5);

    for (let i = 0; i < rowNumber; i ++) {
        let startRange = i * 5;
        let endRange = i * 5 + 5;

        rows.push(
            <PokemonEntryRow key={i} data={props.data.results.slice(startRange, endRange)} />
        )
    }
    
    return (
        <>
            {rows}
        </>
    );
}

export default PokedexContainer;