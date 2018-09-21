import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';
import Modal from './modal';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <Navigation className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="nav-list">
          <Link to="/"><img src="https://res.cloudinary.com/aplu/image/upload/v1536934361/mark_wkghk1.svg" /></Link>
          <Link to="#presentation" className="presentation">Présentation</Link>
          <Link to="#makingof">Making-of</Link>
          <Link to="#about">À Propos</Link>
          <Modal />
        </div>
      </Navigation>
    )
  }
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    padding: 16px 0;
    font-size: 16px;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    .nav-list {
      display:flex;
      justify-items: center;
      align-items: center;
      max-width: 1140px;
      margin: auto;
      padding: 0 24px;
      box-sizing: border-box;
    }

    .nav-list > div:last-child {
      margin-left: auto;
    }

    .nav-list > a:not(:last-child) {
      margin-right: 24px; 
    }
    .nav-list > a:first-child {
      margin-right: 40px;
      max-height: 24px;
    }

    a {
      text-decoration: none;
      color: rgba(0,0,0,.6);
      font-weight: 500;

      &:hover {
        cursor: pointer;
        color: #2F80ED;
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

    @media (max-width: 640px) {
      .nav-list { padding: 0 16px; }
      .presentation { display: none; }
      .nav-list > a:not(:last-child) {
        margin-right: 16px;
        font-size: 15px;
      }
      .nav-list > a:first-child { 
        margin-right: 24px
        max-height: 20px;
      }
      img { max-height: 20px; }

    }

    &.headerScrolled {
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
	    border: white;
      z-index: 10;
      padding: 12px 0;
    }
`


export default Header
