import React, { useContext } from "react";
import PokemonEntryRow from "./PokemonEntryRow.js";
import { SearchContext } from "../../App.js";
import "../css/SearchResults.css";

function SearchResults(props) {

    const {searchParameters, setSearchParameters} = useContext(SearchContext);

    let rows = [];

    function createRows(colPerRow) {
        let pokemonInformation = props.data.results;

        if (searchParameters.searchType === "name") {
            pokemonInformation = pokemonInformation.filter(data => data.name.includes(searchParameters.searchInput));
        }

        if (searchParameters.searchType === "number") {
            pokemonInformation = [pokemonInformation[parseInt(searchParameters.searchInput) - 1]];
        }

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
            <h3 className="searchResultsHeader">Search Results</h3>
            {rows}
        </>
    );
}

export default SearchResults;