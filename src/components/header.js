import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <Navigation>
    <div>
      <Link to="/"><img src="https://res.cloudinary.com/aplu/image/upload/v1536934361/mark_wkghk1.svg" /></Link>
      <Link to="#presentation">Présentation</Link>
      <Link to="#makingof">Making Of</Link>
      <Link to="#whoami">Qui suis-je ?</Link>
      <a src="mailto:pluantoine+kmbappe@gmail.com?subject=Application Mobile Kylian Mbappé"><button>Contact</button></a>
    </div>
  </Navigation>
)

const Navigation = styled.nav`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 16px 0;
  font-size: 18px;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;

  div {
    display:flex;
    justify-items: center;
    align-items: center;
    max-width: 1140px;
    margin: auto;
    padding: 0 24px;
    box-sizing: border-box;
  }

  a:last-child {
    margin-left: auto;
  }

  a:not(:last-child) {
    margin-right: 24px; 
  }
  a:first-child {
    margin-right: 40px;
    max-height: 24px;
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
  img { 
    max-height: 24px;
    opacity: 0.75;
  }

  /*@media (max-width: 640px) {
    display: none;
  }*/

`


export default Header
