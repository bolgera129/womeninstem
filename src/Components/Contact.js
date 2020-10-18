import React, { useState } from "react"
import { Input, Grid } from "@material-ui/core"
import { Divider } from "antd"


export default function Contact(){

    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [email, setEmail] = useState("")
    console.log(first, second, email)

    return(
        <div>
            <Grid container item lg = {12}>
                <img style = {{width : "100%"}}src = '/WIS/ContactMePage.JPG'/>
            </Grid>
            <div style ={{padding: '50px'}}>
                <h1 className = "centerText">
                            Get Involved!
                        </h1>
                        <Divider/>
                <Grid container lg = {12}>
                    <Grid item justify = "center" lg = {6}>
                        <h2>
                            Partners
                        </h2>
                        <p>
                        If you are interested in contributing to our organization by sharing information or through partnership events or on your search for interns, please reach out to mailto:bcwomeninstem@gmail.com We look forward to hearing from you!
                        </p>
                    </Grid>
                    <Grid item justify = "center" lg = {6}>
                        <h2>
                            Students
                        </h2>
                        <p>
                        We are excited to welcome all women from the variety of STEM fields here at BC.
                        <p>
                             The first step in getting involved is to join our listserv by either clinking the monkey at the bottom of the page or filling out the form below. We look forward to seeing you at our next event!
                        </p>
                        </p>

                    </Grid>
                </Grid>
            </div>
                        {/* <div style = {{width : '100%', backgroundColor : '#cc99ff'}}> */}
                <div style = {{backgroundColor: "#f2e6ff", width: '100%', borderWidth:'5px', height:'100%'}}>
                    <Grid container className = "padding20">
                        <Grid lg = {12}>
                            <h1>
                                Subscribe
                            </h1>
                        </Grid>
                        <Grid item lg = {12}>
                            <p>
                                Enter your contact information below to subscribe to our weekly emails.
                            </p>
                        </Grid>
                        <Grid item lg = {4}>
                            <Input 
                                placeholder = "First Name"
                                onChange = { e => setFirst(e.target.value)}
                                size = "large"
                                className = "width90"
                            />
                        </Grid>
                        <Grid item lg = {4} className = "width90">
                            <Input 
                                placeholder = "Last Name"
                                onChange = { e => setSecond(e.target.value)}
                                size = "large"
                                className = "width90"
                            />
                        </Grid>
                        <Grid item lg = {4} className = "width90">
                            <Input 
                                placeholder = "Email"
                                onChange = { e => setEmail(e.target.value)}
                                size = "large"
                                className = "width90"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        // </div>
    )
}