import React from "react"
import {Grid} from "@material-ui/core"
import useWindowDimensions from "../Utils/windowDimensions"

export default function Mission(){


    const { height, width } = useWindowDimensions();


    return(
        <div>
            <img src = "widelogo.png" height = {height} width = {width} alt = 'wide logo'/>
            <Grid container lg = {12} className = "padding20">
                    <Grid item lg  = {4}>
                        <img className = "roundedimage" src = "logo.png" style = {{width : "100%", height : '100%'}} alt = 'bc women in stem'/>
                    </Grid>
                    <Grid item  lg = {8} justify = "center" style = {{marginTop: '50px'}}>
                        <h1>Our Mission</h1>
                        <div style = {{marginTop: '50px', margin:'20px'}}>
                        <strong> Women in STEM connects, supports, and empowers undergraduate women at Boston College as they pursue careers in STEM fields. Our Mentorship Program matches underclassmen mentees with upperclassmen mentors based on majors, minors, career aspirations, and interests. We host socials for mentorship groups to build meaningful relationships, share advice on navigating the undergraduate experience as a STEM major, learn about relevant STEM resources at BC and beyond, and foster community. Through our Volunteer Program, we run an after-school science club for young girls at a local K8 school to inspire the next generation of females in STEM. Join us for our fun socials, career building opportunities, new biweekly discussions, and volunteering!
                                An important part of our club is volunteering at Edison School, 15 minutes away from the Boston College campus. Once a week, a group of volunteers brings materials for science experiments to the school and perform engaging science activities with girls aged 10-13. These experiments are designed to interest the girls in STEM fields, teach them important scientific concepts, exercise teamwork and provide them female role models in the STEM area. We believe that by inspiring today's children, we can create tomorrow's lead women in science and technology.
                        </strong>
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
}