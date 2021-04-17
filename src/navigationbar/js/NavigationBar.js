import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search.js";

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-between">
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Search />
            </Navbar>
        </>
    );
}

export default NavigationBar;