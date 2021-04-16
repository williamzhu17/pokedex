import React, { useEffect, useState } from "react";

function PokemonEntry(props) {

    //Gets pokemon's name
    let name = props.data.name;
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const [pokemonData, setPokemonData] = useState({
        "name": nameCapitalized, 
        "height": 0,
        "weight": 0,
        "types": null,
        "artworkLink": "", 
        "iconLink": "",

    });

    useEffect(() => {
        makeAPICall(props.data.url);
    }, []);

    function makeAPICall(URL) {
        let promise = getPromise(URL);
    
        promise.then(result => {
          console.log(JSON.parse(result));
          return JSON.parse(result);
        })
        .then(result => {
            setPokemonData({
                ...pokemonData, 
                "height": result.height,
                "weight": result.weight
            });
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
            <p>{pokemonData.name}</p>
            <p>{pokemonData.height}</p>
            <p>{pokemonData.weight}</p>
        </>
    );
}

export default PokemonEntry;