import React from "react"
import { Divider, Card } from "antd"
import {Grid} from "@material-ui/core"
import "antd/dist/antd.css";

export default function Events(){
    return(
        <div container className = "padding20">
            <Divider/>
                <h2>
                    Miscellaneous Opportunities
                </h2>
                <Grid container>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'ehi.png'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "ehi.png" style= {{width:"100px", height: "75px", padding: 0}} alt = 'heights for health'/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Engineering Healthcare Innovations Presents Heights 4 Health
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>
                </Grid>

                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'cic.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "cic.png" style= {{width:"150px", height: "75px", padding: 0}} alt = 'civic innovation corps'/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Civic Innovation Corps
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>    
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'na.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                                <Grid item lg = {4} sm = {12}>
                                    <img src= "gartner.png" style= {{width:"100px", height: "75px", padding: 0}} alt = 'our community now'/>
                                </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Grow With Gartner: Student Leadership Summit                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>    
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'na.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                                <Grid item lg = {4} sm = {12}>
                                    <img src= "mc.png" style= {{width:"100px", height: "75px", padding: 0}} alt = 'our community now'/>
                                </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Make friends during these tough times! New platform called Magic Connects created by CS major at UPENN.
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>    
                </Grid>
            </Grid>
            <Divider/>
                <h2>
                    Summer Oppurtunities
                </h2>
                <Grid container>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'ey.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "ey.png" style= {{width:"75px", height: "75px", padding: 0}} alt = 'chemists shut down to reflect on diversity'/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Expedition EY — Technology Track
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>                    
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'crest.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "crest.jpeg" style= {{width:"100px", height: "75px", padding: 0}} alt = 'diverse education'/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                The Commercial Real Estate Success Training (CREST) Program
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'hiring.pdf'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "linx.png" style= {{width:"100px", height: "75px", padding: 0}} alt = 'A Survival Guide for Black, Indigenous, and Other Women of Color in Academe'/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                    Linx Summer Camp Instructor
                                </p>          
                            </Grid>
                        </Grid>
                    </a>
                </Card>                    
                </Grid>
                </Grid>
            <Divider/>
        </div>
    )
}