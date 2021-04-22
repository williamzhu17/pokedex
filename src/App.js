import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./navigationbar/js/NavigationBar.js";
import PokedexContainer from "./pokedexContainer/js/PokedexContainer.js";
import { getPromise } from "./getPromise";
import React, {useEffect, useState, createContext } from "react";
import Spinner from "react-bootstrap/Spinner";

export const SearchContext = createContext();

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  const [searchParameters, setSearchParameters] = useState({
    "searching": false,
    "searchBoxOpen": false,
    "searchType": "name", 
    "searchInput": "",
  });

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    pokemonInformationAPICall("https://pokeapi.co/api/v2/pokemon?limit=151");
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
      <SearchContext.Provider value={{searchParameters, setSearchParameters}}>
        <NavigationBar />

        {loaded === true ? 
          <PokedexContainer data={pokemonData} colPerRow={6} /> : 
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
      </SearchContext.Provider>
    
    </div>
  );
}

export default App;
