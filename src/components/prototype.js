import React from 'react'
import styled from 'styled-components'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css

const Prototype = props => (
	<VideoContent>
        <Wrapper>
            <Title>L'indispensable qu'il vous faut.<br/> À porté de main.</Title>
            <Text>Nombre des apps intégrées à votre MacBook Pro disposent de commandes accessibles par la Touch Bar pour vous faciliter les tâches courantes, comme l’envoi d’un e‑mail ou la mise en forme d’un document. La Touch Bar change en .</Text>
            <Player
                playsInline
                poster="http://res.cloudinary.com/aplu/image/upload/v1536421585/Prototype-poster_gmohic.png"
                src="http://res.cloudinary.com/aplu/video/upload/c_scale,w_1440/v1536417944/km-prototype_cfqqqq.mp4"
            />
        </Wrapper>
    </VideoContent>
)

const VideoContent = styled.div`
    background: #000000;
    padding-top: 120px;
`
const Wrapper = styled.div`
    max-width:1280px;
    margin: 0 auto;
`
const Title = styled.h1`
    font-size: 40px;
    line-height: 1.4;
    font-weight: 600;
    letter-spacing: 0em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    text-align: center;
    color:white;
    margin-block-start: 1.33em;
`
const Text = styled.p`
    font-size: 17px;
    line-height: 1.5;
    color: #63636e;
    text-align: center;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    max-width: 630px;
    margin: auto;
    margin-top: 1em;
    margin-block-end: 2em;
`

export default Prototype