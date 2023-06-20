import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <><div>
    This is Home page
    </div>  
    <p>
        This to render to About page
    </p>
    <Link to={"/about"}>About</Link>
    
  </>
  )
}

export default Home