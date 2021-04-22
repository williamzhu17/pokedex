import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search.js";
import Button from "react-bootstrap/Button";

function NavigationBar() {

    const [searching, setSearching] = useState(false);

    function handleSearch() {
        setSearching(true);
    }

    function handleClose() {
        setSearching(false);
    }

    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-between">
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Button onClick={handleSearch}>Search</Button>
            </Navbar>

            <Search handleClose={handleClose} searching={searching} />
        </>
    );
}

export default NavigationBar;