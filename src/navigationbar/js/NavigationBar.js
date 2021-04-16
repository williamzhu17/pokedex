import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-between">
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="primary">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}

export default NavigationBar;