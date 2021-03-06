import React, { Component } from "react";
import styled from "styled-components";
import ClickOutside from "react-click-outside";


class Modal extends Component {
  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    
    this.state = {
        showModal: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  // function to handle the click
  handleClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  // Close moda if you click outside
  handleClickOutside = () => {
    if (this.state.showModal) {
      this.handleClick()
    }
  }

  // Define theme or inversed
  //static propTypes = {
  //  inverseTheme: PropTypes.bool,
  //  theme: PropTypes.string,
  //}

  //static defaultProps = {
  //  inverseTheme: false,
  //  theme: "light",
  //}

  // the render() method to put stuff into the DOM
  render() {

    // the modal you will toggle on and off
    const modal = (
    <ModalBG>
      <ModalWindow>
        <ClickOutside onClickOutside={this.handleClickOutside}>
            <Header>
                <CloseButton onClick={this.handleClick}>X</CloseButton>
            </Header>
            <Content>
                <ProfilePic src="https://pbs.twimg.com/profile_images/943082975314546689/HVaWQiah_400x400.jpg" />
                <Author>Antoine Plu</Author>
                <Job>Designer Indépendant</Job>
                <Email href="mailto:pluantoine+kmbappe@gmail.com?subject=Application Mobile Kylian Mbappé" className="emailadress">pluantoine@gmail.com</Email>
                <Links>
                    <a className="twitter" href="http://twitter.com/AntoinePlu">Twitter</a>
                    <a className="linkedin" href="http://linkedin.com/in/AntoinePlu">LinkedIn</a>
                    <a className="dribbble" href="http://dribbble.com/AntoinePlu">Dribbble</a>
                </Links>
            </Content>
        </ClickOutside>
      </ModalWindow>
    </ModalBG>
    );

    // Define button theme
    //const { theme, inverseTheme } = this.props

    // the return() to put your default HTML into the DOM
    return (
        // wrapper div of component
        // If you want to hide button when clicked, add display={this.state.showModal ? "none" : "block"}
        // [styles.modal]: true,
        // [styles.modal__inverseTheme]: inverseTheme,
        // [styles.modal__light]: theme === "light",
        // [styles.modal__dark]: theme === "dark",
      <div>
        <OpenModal
            onClick={this.handleClick}
        >
            Contact
        </OpenModal>
        {this.state.showModal ? modal : ""}
      </div>
    );
  }
}

const OpenModal = styled.div`
    cursor: pointer;
    background: #2F80ED;
    border-radius: 6px;
    border: 1px solid hsla(214, 84%, 50%, 80%);
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    padding: 8px 16px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    display: ${props => props.display};

    &:active {
        box-shadow: none;
    }

    @media (max-width: 640px) {
        padding: 8px 12px;
        font-size: 12px;
    }
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
    min-width: 320px;
	border-radius: 8px;
	overflow: hidden;
    display: flex;
	flex-direction: column;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2) 0s;

    @media (max-width: 640px) {
        min-width: 92%;
    }
`

const Header = styled.div`
    background: #fafafa;
    height: 80px;
`
    const CloseButton = styled.button`
        position: absolute;
        right: 16px;
        top: 16px;
        padding: 4px 6px;
        border-radius: 4px;
        color: #999;
        border: none;
        background: rgba(0,0,0,.08);
    `
const Content = styled.div`
    display: flex;
	flex-direction: column;
	margin: auto;
    margin-top: -40px;
    z-index: 10;

    .emailadress {
        color: #2F80ED;
    }
`
    const ProfilePic = styled.img`
        width: 100px;
        max-height: 100px !important;
        border-radius: 100%;
        opacity: 1 !important;
        margin: auto;
        margin-bottom: 16px;
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
    `
    const Email = styled.a`
        margin: 16px auto 16px auto;
        color: #2F80ED !important;
    `
    const Tel = styled.p`
        margin: 8px auto 0;
        font-weight: 500;
    `
    const Links = styled.div`
        margin: 16px auto 32px;

        a {
            color: rgba(255,255,255,.8);
            padding: 6px 12px;
	        border-radius: 4px;
            font-size: 14px;
            color: #fff !important;
        }

        .twitter { background: #55acee; margin-right: 16px; }
        .linkedin { background: #007bb5; margin-right: 16px; }
        .dribbble { background: #ea4c89; }
    `
    const ContactInfo = styled.div`
        border-top: 1px solid #dedede;
        padding: 16px 0;
        margin: auto;
        text-align: center;
        
        a {
            color: #2F80ED !important;
        }
    `

export default Modal