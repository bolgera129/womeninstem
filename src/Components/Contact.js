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
            <div style ={{padding: '50px'}}>
                <h1 className = "centerText padding20">
                            Get Involved!
                        </h1>
                        <Divider/>
                <Grid container lg = {12}>
                    <Grid item justify = "center" lg = {6}>
                        <h2>
                            Partners
                        </h2>
                        <p>
                            A bunch of text explaning a bunch of things
                        </p>
                    </Grid>
                    <Grid item justify = "center" lg = {6}>
                        <h2>
                            Students
                        </h2>
                        <p>
                            A bunch of text explaning a bunch of things
                        </p>

                    </Grid>
                </Grid>
            </div>
            {/* <div style = {{width : '100%', backgroundColor : '#cc99ff'}}> */}
                <div style = {{backgroundColor: "#f2e6ff", width: '100%', borderWidth:'5px', height:'100%'}}>
                    <Grid container className = "padding20">
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