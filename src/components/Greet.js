import React from 'react'
import PropTypes from 'prop-types'


export default function Greet({fname, lname, age}) {
    return (
      <div>Welcome 
          {fname} {lname}
          <br/>
          {age} years old
          
      </div>
    )
}

Greet.propTypes = {
    fname: PropTypes.string,
    lname: PropTypes.string,
    age: PropTypes.number
}
  





