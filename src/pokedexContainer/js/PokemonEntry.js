import React, { useEffect, useState } from "react";
import "../css/PokemonEntry.css";
import { getPromise } from "../../getPromise";
import { capitalizeFirstLetter } from "../../capitalizeFirstLetter.js";
import PokemonEntryBox from "./PokemonEntryBox.js";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

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
            let secondType = null;

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
                "secondType": secondType,
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
                <Card onClick={handleClick} className="pokemonIcon">
                    <Card.Img src={pokemonData.iconLink} />
                    <Card.Body>
                        <Card.Title>
                            {pokemonData.name}
                            <span className="pokemonId">{pokemonData.id}</span>
                        </Card.Title>
                    </Card.Body>
                </Card> : 
                <Spinner animation="grow" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }

            <PokemonEntryBox clicked={clicked} handleClose={handleClose} data={pokemonData} />
        </>
    );
}

export default PokemonEntry;