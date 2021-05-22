import React, { useEffect, useState } from "react"; 
import { getPromise } from "../../getPromise.js";

function PokemonEntryBoxFlavorText(props) {

    const [pokemonFlavorText, setPokemonFlavorText] = useState();

    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        pokemonInformationAPICall("https://pokeapi.co/api/v2/pokemon-species/" + props.id);
    }, [props.id]);

    function pokemonInformationAPICall(URL) {
        let promise = getPromise(URL);

        promise.then(result => {
            return JSON.parse(result); 
        })
        .then(result => {
            setPokemonFlavorText(result["flavor_text_entries"][17]["flavor_text"]);
            setLoaded(true);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return(
        <>
            {loaded === true ? 
                <p>{pokemonFlavorText}</p> : 
                <p>Loading...</p>
            }
        </>
    );

}

export default PokemonEntryBoxFlavorText;