import React, { useState } from "react"
import {Menu} from "antd"
import {Link} from "react-router-dom"

export default function NavBar(){

    const [current, setCurrent] = useState("Home")


    function handleClick(e){
        setCurrent(e.key)
    }

    return(
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className = "nav">
        <Menu.Item key="home">
            <Link to = 'home'>
                <img src ='logo.png' style = {{width: '50px', height: '50px'}}/>
            </Link>
        </Menu.Item>
        <Menu.Item key="mission" >
            <Link to = "mission">Mission</Link>
        </Menu.Item>
        <Menu.Item key="programming" >
            <Link to = "programming">Programming</Link>
        </Menu.Item>
        <Menu.Item key="tutoring" >
            <Link to = "tutoring">Tutoring</Link>
        </Menu.Item>
        <Menu.Item key="events" >
            <Link to = "events">Current Events</Link>
        </Menu.Item>
        <Menu.Item key="eboard" >
            <Link to = "eboard">Meet the E-board</Link>
        </Menu.Item>
        <Menu.Item key="mentorship" >
            <Link to = "mentorship">Mentorship</Link>
        </Menu.Item>
        <Menu.Item key="contact" >
            <Link to = "contact">Contact</Link>
        </Menu.Item>
      </Menu>
    )
}