import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search.js";
import Button from "react-bootstrap/Button";
import { SearchContext } from "../../App.js";

function NavigationBar() {
    
    const {searchParameters, setSearchParameters} = useContext(SearchContext);

    function openSearchBox() {
        setSearchParameters({
            ...searchParameters, 
            "searchBoxOpen": true,
        });
    }

    function turnOffSearching() {
        setSearchParameters({
            ...searchParameters, 
            "searching": false,
        });
    }

    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-between">
                <Navbar.Brand>Pokedex</Navbar.Brand>

                {searchParameters.searching === false ? 
                    <Button onClick={openSearchBox}>Search</Button> : 
                    <Button onClick={turnOffSearching} variant="danger">Stop Search</Button>}
            </Navbar>

            <Search />
        </>
    );
}

export default NavigationBar;