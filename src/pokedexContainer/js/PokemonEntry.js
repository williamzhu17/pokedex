import React, { useEffect, useState } from "react";

function PokemonEntry(props) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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

    useEffect(() => {
        makeAPICall(props.data.url);
    }, []);

    function makeAPICall(URL) {
        let promise = getPromise(URL);
    
        promise.then(result => {
          return JSON.parse(result);
        })
        .then(result => {
            if (result.types.length > 1) {
                setPokemonData({
                    ...pokemonData, 
                    "id": result.id,
                    "height": result.height,
                    "weight": result.weight, 
                    "artworkLink": "https://picsum.photos/475/475" /* result.sprites.other.official-artwork.front-default */, 
                    "iconLink": "https://picsum.photos/68/56" /* result.sprites.versions.generation-vii.icons.front-default */,
                    "firstType": capitalizeFirstLetter(result.types[0].type.name),
                    "secondType": capitalizeFirstLetter(result.types[1].type.name)
                });
            } else {
                setPokemonData({
                    ...pokemonData, 
                    "id": result.id, 
                    "height": result.height,
                    "weight": result.weight, 
                    "artworkLink": "https://picsum.photos/475/475" /* result.sprites.other.official-artwork.front-default */, 
                    "iconLink": "https://picsum.photos/68/56" /* result.sprites.versions.generation-vii.icons.front-default */,
                    "firstType": capitalizeFirstLetter(result.types[0].type.name)
                });
            }
        })
        .catch(error => {
          console.log(error);
        });
      }

    function getPromise(URL) {
        let promise = new Promise(function (resolve, reject) {
          let req = new XMLHttpRequest();
          req.open("GET", URL);
          req.onload = function () {
            if (req.status === 200) {
              resolve(req.response);
            } else {
              reject("There is an Error!");
            }
          };
          req.send();
        });
        return promise;
      }

    return (
        <>
            {pokemonData.id === null ? <p>Loading...</p> : <p>{pokemonData.id}</p>}
            {pokemonData.name === null ? <p>Loading...</p> : <p>{pokemonData.name}</p>}
            {pokemonData.height === null ? <p>Loading...</p> : <p>{pokemonData.height}</p>}
            {pokemonData.weight === null ? <p>Loading...</p> : <p>{pokemonData.weight}</p>}
            {pokemonData.firstType === null ? <p>Loading...</p> : <p>{pokemonData.firstType}</p>}
            {pokemonData.secondType === null ? <br /> : <p>{pokemonData.secondType}</p>}
            {pokemonData.iconLink === null ? <p>Loading...</p> : <img src={pokemonData.iconLink} alt={"Picture of " + pokemonData.name} width="68" height="56" />}
        </>
    );
}

export default PokemonEntry;