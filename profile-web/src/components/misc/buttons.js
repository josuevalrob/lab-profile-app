import React from 'react'
import {Link} from 'react-router-dom'

const  Button = props => (
  <Link 
    {...props} 
    className={`btn btn-${props.btn} ${props.className}`} 
    role="button" 
    to={props.go}>
    {props.name}
  </Link>
)

export default Button