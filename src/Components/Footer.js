import React from "react"
import { Grid } from "@material-ui/core"
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer(){


  return(
    <Grid style = {{padding:'20px'}}>
      <Grid>
        <span>
          <a style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}} href = 'https://www.facebook.com/bcwomeninstem/'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href = '' style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href= 'https://www.instagram.com/bcwomeninstem/?hl=en' style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>
      </Grid>
    </Grid>
  )
}