import React from "react";
import PokemonEntryRow from "./PokemonEntryRow.js";

function PokedexContainer(props) {

    let rows = [];

    function createRows(colPerRow) {
        let pokemonInformation = props.data.results;

        let rowNumber = Math.ceil((pokemonInformation.length) / colPerRow);

        for (let i = 0; i < rowNumber; i ++) {
            let startRange = i * colPerRow;
            let endRange = i * colPerRow + colPerRow;

            if (endRange > pokemonInformation.length) {
                endRange = pokemonInformation.length;
            }
    
            rows.push(
                <PokemonEntryRow key={i} data={pokemonInformation.slice(startRange, endRange)} colPerRow={props.colPerRow} />
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