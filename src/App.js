import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./navigationbar/js/NavigationBar.js";
import PokedexContainer from "./pokedexContainer/js/PokedexContainer.js";
import { getPromise } from "./getPromise";
import React, {useEffect, useState} from "react";

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    pokemonInformationAPICall("https://pokeapi.co/api/v2/pokemon?limit=150");
  }, []);

  //Gets links to all of the different pokemon and stores them into the pokemonData
  function pokemonInformationAPICall(URL) {
    let promise = getPromise(URL);

    promise.then(result => {
      setPokemonData(JSON.parse(result));
      setLoaded(true);
    })
    .catch(error => {
      console.log(error);
      setError(error);
    });
  }

  return (
    <div className="App">
      <NavigationBar />
      {loaded === true ? <PokedexContainer data={pokemonData} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
