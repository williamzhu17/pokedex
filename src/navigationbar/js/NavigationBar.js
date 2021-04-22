import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search.js";
import Button from "react-bootstrap/Button";

function NavigationBar() {

    const [searchParameters, setSearchParameters] = useState({
        "searching": false,
        "searchBoxOpen": false,
        "searchType": "name", 
        "searchInput": "",
    });

    function openSearchBox() {
        setSearchParameters({
            ...searchParameters, 
            "searchBoxOpen": true,
        });
    }

    function closeSearchBox() {
        setSearchParameters({
            ...searchParameters, 
            "searchBoxOpen": false,
        });
    }

    function handleChange(event) {
        if (event.target.type === "text") {
            setSearchParameters({
                ...searchParameters, 
                "searchInput": event.target.value,
            });
        }

        if (event.target.type === "radio") {
            setSearchParameters({
                ...searchParameters, 
                "searchType": event.target.value,
            });
        }
    }

    function onSubmit() {
        setSearchParameters({
            ...searchParameters, 
            "searching": true,
            "searchBoxOpen": false, 
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

            <Search closeSearchBox={closeSearchBox} handleChange={handleChange} searchParameters={searchParameters} onSubmit={onSubmit} />
        </>
    );
}

export default NavigationBar;