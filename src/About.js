import React from 'react'
import { Link } from 'react-router-dom'
import { Homew } from './Pages/Homew'

const About = () => {
  return (
<>
<div>
    welcome to about page
</div>
<Link to={'/'}>Go to Home pages</Link>
<Homew/>
</>
  )
}

export default About