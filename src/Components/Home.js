import React from "react"
import {Image} from "react-bootstrap"
import useWindowDimensions from "../Utils/windowDimensions"
import css from "./Home.module.css"

export default function Home(){

    const { height, width } = useWindowDimensions();



    return(
        <div>
           <Image src = "homepage.jpg"  height = {height} width = {width} />
           <img width = {width} height = {height} className = {css.screen}/>
           <div className = {css.overlay}>
               Women in Stem
           </div>
        </div>
    )
}