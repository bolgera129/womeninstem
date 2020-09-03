import React from "react"
import {Image} from "react-bootstrap"
import useWindowDimensions from "../Utils/windowDimensions"
import css from "./Home.module.css"
import Mission from "./Mission"
import {Grid} from '@material-ui/core'
import 'antd/dist/antd.css';

export default function Home(){

    const { height, width } = useWindowDimensions();



    return(
        <div>
           <Image src = "homepage.jpg"  height = {height} width = {width} />
           <Image width = {width} height = {height} className = {css.screen} alt = ''/>
           <div className = {css.overlay}>
               Women in Stem
           </div>
           <Grid container justify = 'center'>
                <strong style = {{width : "80%", marginTop: '20px'}}>
                    The goal of Women in STEM is to provide a supportive and encouraging environment for female students to comfortably explore their STEM interests. Through peer mentorship groups, access to new resources, and engaging discussions, we hope to welcome and persuade more girls to explore and continue in some field of STEM. 
                </strong>
           </Grid>
           <Mission/>
        </div>
    )
}