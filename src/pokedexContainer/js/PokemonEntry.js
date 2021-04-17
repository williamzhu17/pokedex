import React, { useEffect, useState } from "react";
import "../css/PokemonEntry.css";
import Modal from "react-bootstrap/Modal";
import { getPromise } from "../../getPromise";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

    const [clicked, setClicked] = useState(false);

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

      function handleClick() {
          setClicked(true);
      }

      function handleClose() {
          setClicked(false);
      }

    return (
        <>
            <div onClick={handleClick} >
                {pokemonData.id === null ? <p>Loading...</p> : <p className="pokemonId">{pokemonData.id}</p>}
                {pokemonData.name === null ? <p>Loading...</p> : <p>{pokemonData.name}</p>}
                {pokemonData.iconLink === null ? <p>Loading...</p> : <img src={pokemonData.iconLink} alt={"Picture of " + pokemonData.name} width="68" height="56" />}
            </div>

            <Modal show={clicked} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{pokemonData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {
                                pokemonData.artworkLink === null ? 
                                <p>Loading...</p> : 
                                <img src={pokemonData.artworkLink} alt={"Picture of " + pokemonData.name} width="475" height="475" className="pokemonArtwork"/>
                            }
                        </Col>
                        <Col>
                            {pokemonData.height === null ? <p>Loading...</p> : <p className="pokemonInformation">Height: {pokemonData.height}</p>}
                            {pokemonData.weight === null ? <p>Loading...</p> : <p className="pokemonInformation">Weight: {pokemonData.weight}</p>}
                            {pokemonData.firstType === null ? <p>Loading...</p> : <p className="pokemonInformation">Type 1: {pokemonData.firstType}</p>}
                            {pokemonData.secondType === null ? <br /> : <p className="pokemonInformation">Type 2: {pokemonData.secondType}</p>}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PokemonEntry;