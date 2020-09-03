import React from 'react'
import { Grid } from '@material-ui/core'
import {Image} from 'react-bootstrap'

export default function Mentorship(){


    return(
        <div>
            <Grid container>
            <Grid item lg = {12}>
                        <Image fluid src = 'mentorship.png' style = {{width : "100%"}}/>
                    </Grid>
                <Grid item container lg = {6}>

                    <Grid justify = 'center' style = {{textAlign: 'center', width:'100%', margin:'50px'}}>
                        <strong style = {{textAlign: 'center', fontSize: '30px'}}>
                            Fall 2020 Mentorship Program
                        </strong>
                    </Grid>
                    <Grid style = {{margin: '50px'}}>
                        <h1>
                            About
                        </h1>
                        <p>
                            The Women in STEM Mentorship Program provides upper and underclassmen STEM majors with an opportunity to connect and cultivate meaningful, lasting relationships. Mentorship groups are thoughtfully arranged based on members’ majors, minors, career aspirations, and personal interests. These groups meet frequently throughout the semester at our social events and are encouraged to stay in touch outside of our formal programming. Our program aims to create a supportive space where members can learn from and empower each other and ultimately build their confidence as they prepare for STEM careers.
                        </p>
                    </Grid>
                    <Grid item lg = {6} style = {{padding: '50px'}}>
                        <h1>
                            Role of Mentor:
                        </h1>
                        <p>
                            <p>
                            Lead a small community of female students with similar majors and/or career paths 
                            </p>
                            <p>
                            Recommend professors and advisors 
                            </p>
                            <p>
                            Offer internship and career advice
                            </p>
                            <p>
                            Plan fun bonding activities outside of formal events
                            </p>
                            <p>
                            Socials
                            </p>
                            <p>
                            Career panels 
                            </p>
                            <p>
                            Holiday activities
                            </p>
                            <p>
                            Apply to be a mentor here
                            </p>
                        </p>
                    </Grid>
                    <Grid item lg = {6} style = {{padding: '50px'}}>
                        <h1>
                            Role of a Mentee
                        </h1>
                        <p>
                            <p>
                            Connect with upperclassmen on campus and develop meaningful relationships
                            </p>
                            <p>
                            Meet and support fellow underclassmen in mentorship group
                            </p>
                            <p>
                            Gain insight from mentors and other mentees into resources at Boston College, internships, and life beyond BC.
                            </p>
                            <p>
                            Apply to be a mentee here
                            </p>
                        </p>
                    </Grid>
                </Grid>
                <Grid lg = {6}>

                </Grid>
            </Grid>
        </div>
    )
}