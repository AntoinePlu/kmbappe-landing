import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <Navigation>
    <div>
      <Link to="#makingof">Présentation</Link>
      <Link to="#makingof">Making Of</Link>
      <Link to="#whoami">Qui suis-je ?</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </Navigation>
)

const Navigation = styled.nav`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 16px 0;
  font-size: 18px;

  div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    align-items: center;
    max-width: 35%;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: rgba(0,0,0,.6);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    button {
      background: white;
      border-radius: 6px;
      border: 1px solid hsla(0, 0%, 90%, 1);
      padding: 8px 16px;
      text-decoration: none;
      color: #2F80ED;
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    }
  }

`


export default Header
