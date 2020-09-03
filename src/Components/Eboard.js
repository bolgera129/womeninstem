import React from "react"
import {Grid} from "@material-ui/core"
import {Image} from "react-bootstrap"
import {Divider} from "antd"

export default function Eboard(props){


    return(
        <div className = "marginTop100 eboard">
            <Grid container lg = {12} xs = {12} justify = "center">
                <Divider className = "divider"/>
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "CatherineSchofield.png" width = {400} heigth = {400}/>
                    </Grid>
                    <Grid item lg = {8}>
                        <h1>Catherine Schofield</h1>
                        <strong>
                            <p>
                                Position: President
                            </p>
                            <p>
                                Major: Biology with minors in Italian Studies and Medical Humanities, Health, and Culture
                            </p>
                            <p>
                                Class: 2021
                            </p>
                            <p>
                                Hometown: Glocester, Rhode Island
                            </p>
                            <p>
                                Clubs/Hobbies: I love writing, photography, exploring nature, and all things Italian! I am always looking for ways to integrate my passions for service, science, and writing. This semester, I am excited to be a new Appa Leader and continue my neuroendocrinology research in a Brigham and Women’s Hospital lab.
                            </p>
                            <p>
                                What you’re excited for this semester in WIS: I am looking forward to empowering other BC women and cultivating an uplifting community among our members, especially during these isolating times. I can’t wait to see how our club will grow this year!
                            </p>
                        </strong>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {8} justify = 'center' style = {{alignItems : 'center'}}>
                        <h1>Julia Pollard</h1>
                        <strong>
                            <p>
                                Position: Vice President
                            </p>
                            <p>
                                Major: Biochemistry
                            </p>
                            <p>
                                Class: 2022
                            </p>
                            <p>
                                Hometown: Cocoa Beach, FL
                            </p>
                            <p>
                                Clubs/Hobbies: I love going to the beach and skating around town. I will miss cooking new meals with food from my garden while at school. While here, I do research in the Van Opijnen lab and am also getting into computer science! 
                            </p>
                            <p>
                                What you’re excited for this semester in WIS: I am excited to meet new members and hear about what others are interested in!
                            </p>
                        </strong>
                    </Grid>
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "JuliaPollard.jpeg" width = {400} heigth = {400}/>
                    </Grid>
                </Grid>  
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "headshot.jpg" width = {400} heigth = {400}/>
                    </Grid>
                    <Grid item lg = {8}>
                        <h1>Emma Oss</h1>
                        <strong>
                            <p>
                            Position: Volunteer Coordinator	

                            </p>
                            <p>
                            Major: Biochemistry

                            </p>
                            <p>
                            Class: 2022

                            </p>
                            <p>
                            Hometown: Rosemount, MN

                            </p>
                            <p>
                            Clubs/Hobbies: I love to draw, and as a typical Minnesotan I LOVE watching hockey games! At BC, I am also involved in BC Special Olympics and the BC Buddy program.

                            </p>
                            <p>
                            What you’re excited for this semester in WIS: I am excited to get to know more of my fellow Women in STEM, even with the new format!

                            </p>
                        </strong>
                    </Grid>
                </Grid> 
                <Divider className = "divider"/>
                <Grid container lg = {12}>
                    <Grid item lg = {8}>
                        <h1>Alyssa Rolon</h1>
                        <strong>
                            <p>
                                Position: Outreach Chair
                            </p>
                            <p>
                                Major: Neuroscience
                            </p>
                            <p>
                                Class: 2023
                            </p>
                            <p>
                                Hometown: Fernandina Beach, Florida
                            </p>
                            <p>
                                Clubs/Hobbies: I love reading, writing, and watching movies with my friends and family. 
                            </p>
                            <p>
                                What you’re excited for this semester in WIS: I’m so excited to meet all the new members this year! 
                            </p>
                        </strong>
                    </Grid>
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "headshot.jpg" width = {400} heigth = {400}/>
                    </Grid>
                </Grid>
                <Divider/>

                <Divider className = "divider"/>
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "AmaliaRiegelhuth.JPG" height = {400}/>
                    </Grid>
                    <Grid item lg = {8}>
                        <h1>Amalia Riegelhuth</h1>
                        <strong>
                            <p>
                            Position: Social Media Chair
                            </p>
                            <p>
                            Major: Computer Science with a minor in Art History
                            </p>
                            <p>
                            Class: 2021
                            </p>
                            <p>
                            Hometown: Moraga, CA (outside San Francisco)
                            </p>
                            <p>
                            Clubs/Hobbies: I love hiking and backpacking, especially in Yosemite National Park. I play the French Horn in the University Wind Ensemble. I am really into movies and my favorite genre is thrillers or dramas.
                            </p>
                            <p>
                            What you’re excited for this semester in WIS: I am excited to meet all of the new freshmen and for our new bi-weekly discussions.
                            </p>
                        </strong>
                    </Grid>
                </Grid>
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {8}>
                        <h1>Caitlin Wolfstaetter</h1>
                        <strong>
                            <p>
                            Position: Treasurer
                            </p>
                            <p>
                            Major: Math BA with a minor in finance
                            </p>
                            <p>
                            Class: 2022
                            </p>
                            <p>
                            Hometown: New York City
                            </p>
                            <p>
                            Clubs/Hobbies: I love going to coffee shops. Some may call it a caffeine dependency but i think it’s a fun way to get out and see different places. But you’ll never see me without a cup of coffee within arms reach. 
                            </p>
                            <p>
                            What you’re excited for this semester in WIS: I am really excited to be continuing our mentor program and to meet everyone!
                            </p>
                        </strong>
                    </Grid>
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "headshot.jpg" height = {400}/>
                    </Grid>
                </Grid>
                <Divider className = "divider"/>
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "ClaireHines.jpg" height = {400}/>
                    </Grid>
                    <Grid item lg = {8}>
                        <h1>Claire Hines</h1>
                        <strong>
                            <p>
                            Position: Event Planner
                            </p>
                            <p>
                            Major: Geological Sciences with a minor in Mathematics
                            </p>
                            <p>
                            Class: 2022
                            </p>
                            <p>
                            Hometown: Keller, TX (outside Dallas)
                            </p>
                            <p>
                            Clubs/Hobbies: I love hiking, going to museums, and scrolling through pinterest. I am a sucker for a good TV show in any genre and love getting suggestions for what to watch next. This is my second year on the Women in STEM E-board! I am also on the E-board for the Geology Association and do research in the Earth and Environmental Sciences Department. 
                            </p>
                            <p>
                            What you’re excited for this semester in WIS: I am so excited to connect with new freshmen and returning members and to be a mentor this year.
                            </p>
                        </strong>
                    </Grid>
                </Grid> 
                <Grid container lg = {12} className = "padding20">
                    <Grid item lg = {8}>
                        <h1>Dana Salta</h1>
                        <strong>
                            <p>
                            Position: Secretary
                            </p>
                            <p>
                            Major: Math with minors in Chemistry and Spanish
                            </p>
                            <p>
                            Class: 2023
                            </p>
                            <p>
                            Hometown: Ridgewood, NJ
                            </p>
                            <p>
                            Clubs/Hobbies: I love reading, baking, and this past year I was involved in Chemistry Club and community service in addition to Women in STEM.
                            </p>
                            <p>
                            What you’re excited for this semester in WIS: I’m so excited to see everyone, and especially to meet new freshmen!
                            </p>
                        </strong>
                    </Grid>
                    <Grid item lg = {4}>
                        <Image className = "headshot" src = "headshot.jpg" width = {400} heigth = {400}/>
                    </Grid>
                </Grid>               
            </Grid>
        </div>
)}