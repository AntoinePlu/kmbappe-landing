import React, { Component } from "react";
import styled from "styled-components";


class Modal extends Component {
  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
  }

  // function to handle the click
  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  // the render() method to put stuff into the DOM
  render() {
    // the modal you will toggle on and off
    const modal = (
    <ModalBG>
      <ModalWindow>
        <CloseButton onClick={this.handleClick}>X</CloseButton>
        <ProfilePic src="https://pbs.twimg.com/profile_images/943082975314546689/HVaWQiah_400x400.jpg" />
        <Author>Antoine Plu</Author>
        <Job>Designer Indépendant</Job>
        <Email src="mailto:pluantoine+kmbappe@gmail.com?subject=Application Mobile Kylian Mbappé">pluantoine@gmail.com</Email>
        <Tel>06 89 19 93 51</Tel>
      </ModalWindow>
    </ModalBG>
    );

    // the return() to put your default HTML into the DOM
    return (
      // wrapper div of component
      // If you want to hide button when clicked, add display={this.state.showModal ? "none" : "block"}
      <div>
        <OpenModal onClick={this.handleClick} >
            Contact
        </OpenModal>
        {this.state.showModal ? modal : ""}
      </div>
    );
  }
}

const ProfilePic = styled.img`
    width: 100px;
	max-height: 100px !important;
	border-radius: 100%;
    opacity: 1 !important;
	margin: auto;
`
const Author = styled.h3`
    /*color: white;*/
    margin: 0 auto;
    margin-bottom: 4px;
    letter-spacing: 0em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-weight: 500;
`
const Job = styled.p`
    /*color: #6e6e7a;*/
    margin: auto;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    margin-bottom: 0;
    margin-bottom: 32px;
`
const Email = styled.a`
    margin: auto !important;
`
const Tel = styled.p`
    margin: auto;
`
const CloseButton = styled.button``
const OpenModal = styled.div`
    cursor: pointer;
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
    display: ${props => props.display};
`
const ModalBG = styled.div`
    background: rgba(0,0,0,.5);
    width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
    box-shadow: 0 4px 24px rgba(0,0,0,.16);
`
const ModalWindow = styled.div`
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: fixed;
	background: white;
	width: 30%;
	border-radius: 4px;
	padding: 24px;
    display: flex;
	flex-direction: column;
`

export default Modal