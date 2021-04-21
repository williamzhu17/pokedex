import React, { useEffect, useState } from "react";
import "../css/PokemonEntry.css";
import { getPromise } from "../../getPromise";
import PokemonEntryBox from "./PokemonEntryBox.js";

function PokemonEntry(props) {

    const [pokemonData, setPokemonData] = useState({
        "id": null,
        "name": capitalizeFirstLetter(props.data.name), 
        "height": null,
        "weight": null,
        "artworkLink": null, 
        "iconLink": null,
        "firstType": null,
        "secondType": null, 
    });

    //State to determine when Modal should open or not
    const [clicked, setClicked] = useState(false);

    //States to determine if loaded or not
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState();

    //Prompts makeAPICall function when mounted
    useEffect(() => {
        makeAPICall(props.data.url);
    }, []);

    //Makes API Call
    function makeAPICall(URL) {
        let promise = getPromise(URL);
    
        promise.then(result => {
          return JSON.parse(result);
        })
        .then(result => {
            let secondType;
            if (result.types.length > 1) {
                secondType = capitalizeFirstLetter(result.types[1].type.name);
            }
            setPokemonData({
                ...pokemonData, 
                "id": result.id,
                "height": result.height,
                "weight": result.weight, 
                "artworkLink": result.sprites.other["official-artwork"]["front_default"], 
                "iconLink": result.sprites.versions["generation-vii"].icons["front_default"],
                "firstType": capitalizeFirstLetter(result.types[0].type.name),
                "secondType": secondType
            });
            setLoaded(true);
        })
        .catch(error => {
          console.log(error);
          setError(error);
        });
      }

      //Handles when user clicks on card
      function handleClick() {
          setClicked(true);
      }

      //Handles when use closes car (passed to PokemonEntryBox)
      function handleClose() {
          setClicked(false);
      }

    return (
        <>
            {loaded === true ? 
                <div onClick={handleClick} >
                        <p className="pokemonId">{pokemonData.id}</p>
                        <p>{pokemonData.name}</p>
                        <img src={pokemonData.iconLink} alt={"Picture of " + pokemonData.name} width="68" height="56" />
                </div> : 
                <span>Loading...</span>
            }

            <PokemonEntryBox clicked={clicked} handleClose={handleClose} data={pokemonData} />
        </>
    );

    //Capitalizes first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default PokemonEntry;