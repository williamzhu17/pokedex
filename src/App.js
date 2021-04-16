import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./navigationbar/js/NavigationBar.js";
import PokedexContainer from "./pokedexContainer/js/PokedexContainer.js";
import React, {useEffect, useState} from "react";

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    makeAPICall("https://pokeapi.co/api/v2/pokemon?limit=150");
  }, []);

  //Gets links to all of the different pokemon and stores them into the pokemonData
  function makeAPICall(URL) {
    let promise = getPromise(URL);

    promise.then(result => {
      setPokemonData(JSON.parse(result));
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
    <div className="App">
      <NavigationBar />
      {pokemonData === null ? <p>Loading...</p> : <PokedexContainer data={pokemonData} />}
    </div>
  );
}

export default App;
