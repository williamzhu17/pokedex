import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./navigationbar/js/NavigationBar.js";
import PokedexContainer from "./pokedexContainer/js/PokedexContainer.js";
import { getPromise } from "./getPromise";
import React, {useEffect, useState} from "react";

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    pokemonInformationAPICall("https://pokeapi.co/api/v2/pokemon?limit=150");
  }, []);

  //Gets links to all of the different pokemon and stores them into the pokemonData
  function pokemonInformationAPICall(URL) {
    let promise = getPromise(URL);

    promise.then(result => {
      setPokemonData(JSON.parse(result));
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <NavigationBar />
      {pokemonData === null ? <p>Loading...</p> : <PokedexContainer data={pokemonData} />}
    </div>
  );
}

export default App;
