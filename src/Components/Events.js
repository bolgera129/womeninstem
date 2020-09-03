import React from "react"
import { Divider, Card } from "antd"
import {Grid} from "@material-ui/core"

export default function Events(){
    return(
        <div container className = "padding20">
            <Divider/>
                <h2>
                    Inspring Firsts
                </h2>
                <Grid container>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://www.forbes.com/sites/nancywang/2020/08/23/first-woman-director-at-mit-cs-ai-lab-want-more-women-in-stem-inspire-them-early/#471af876367e'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "forbeswis.jpg" style= {{width:"100px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                First Woman Director At MIT CSAIL: ‘Want More Women In STEM? Inspire Them Early.
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>
                </Grid>

                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://ourcommunitynow.com/news-local/dr-jeanette-epps-makes-history-as-first-black-woman-recruited-for-nasa-international-space-station-mission'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "nasa.png" style= {{width:"100px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12} className = 'articled'>
                                <p>
                                Dr. Jeanette Epps Makes History as First Black Woman Recruited for NASA International Space Station Mission                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>    
                </Grid>
            </Grid>
            <Divider/>
                <h2>
                    Equity in Stem: 
                </h2>
                <Grid container>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://cen.acs.org/content/cen/articles/98/i23/Chemists-ShutDownSTEM-to-reflect-on-diversity-in-science.html?utm_source=Twitter&utm_medium=Social&utm_campaign=CEN'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "missing.jpeg" style= {{width:"75px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12}>
                                <p>
                                    Chemists #ShutDownSTEM to reflect on diversity in science
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>                    
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://www.insidehighered.com/blogs/gradhacker/invisible-minority-stem'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "lgbt.png" style= {{width:"75px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12}>
                                <p>
                                    The Invisible Minority in STEM
                                </p>
                            </Grid>
                        </Grid>                        
                    </a>
                </Card>
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://diverseeducation.com/article/180193/'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "diverse.png" style= {{width:"125px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12}>
                                <p>
                                    Can the Racial and Economic Justice Movement Help Advance Equity in Higher Education?
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://community.chronicle.com/news/2372-a-survival-guide-for-black-indigenous-and-other-women-of-color-in-academe?cid=VTEVPMSED1'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "diversity.jpg" style= {{width:"125px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12}>
                                <p>
                                A Survival Guide for Black, Indigenous, and Other Women of Color in Academe                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>                    
                </Grid>
                <Grid item lg = {6}>
                <Card className = 'event'>
                    <a href = 'https://www.theatlantic.com/culture/archive/2020/07/your-anti-racism-books-are-means-not-end/614281/?fbclid=IwAR3IqyZVKadfUT5OC6O6L0hHaFfNYkiRYpnsQ-k6QOJktqjeLnJyOOpTa_Q'>
                        <Grid container justify = "center"  style= {{ padding: 0}}>
                            <Grid item lg = {4} sm = {12}>
                                <img src= "blm.png" style= {{width:"125px", height: "75px", padding: 0}}/>
                            </Grid>
                            <Grid item lg = {8} sm = {12}>
                                <p>
                                The False Promise of Anti-racism Books
                                </p>
                            </Grid>
                        </Grid>
                    </a>
                </Card>  
                </Grid>
                <Grid lg = {6}>

                </Grid>
                </Grid>
            <Divider/>
        </div>
    )
}