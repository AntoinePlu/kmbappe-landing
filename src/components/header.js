import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/"><img width="30" /></Link>
    <Link to="/courses">Présentation</Link>
    <Link to="#makingof">Making Of</Link>
    <Link to="#whoami">Qui suis-je ?</Link>
    <Link to="/contact"><button>Contact</button></Link>
  </div>
)

export default Header
