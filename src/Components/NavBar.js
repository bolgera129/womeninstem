import React, { useState } from "react"
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){

    const [current, setCurrent] = useState("Home")


    function handleClick(e){
        setCurrent(e.key)
    }

    return(
        <Navbar expand="lg">
            <Navbar.Brand href= 'home'>
                Women in Stem
                {/* <img src = "logo.png" style = {{width : '50px', height : '50px'}}/> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Nav.Link href="/programming">Programming</Nav.Link>
                <Nav.Link href="/tutoring">Tutoring</Nav.Link>
                <Nav.Link href="/events">Current Events</Nav.Link>
                <Nav.Link href="/eboard">Meet the E-Board</Nav.Link>
                <Nav.Link href="/mentorship">Mentorship</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}