import React from "react"
import { Grid } from "@material-ui/core"
import { faFacebook, faInstagram, faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer(){


  return(
    <Grid style = {{padding:'20px'}}>
      <Grid>
        <span>
          <a style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}} href = 'https://www.facebook.com/bcwomeninstem/'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href = 'https://gmail.us4.list-manage.com/subscribe?u=b41243aa0ba2e907228f6fc9d&id=f374236a7f' style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}}>
            <FontAwesomeIcon icon={faMailchimp} />
          </a>
          <a href= 'https://www.instagram.com/bcwomeninstem/?hl=en' style = {{padding : '10px', fontSize: '40px' , color:'#e6ccff'}}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>
      </Grid>
    </Grid>
  )
}