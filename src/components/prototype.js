import React from 'react'
import styled from 'styled-components'
import { Player, ControlBar, BigPlayButton } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css

const Prototype = props => (
	<VideoContent>
        <Wrapper>
            <Title>L'indispensable qu'il vous faut. <span>À porté de main.</span></Title>
            <Text>Suivez tous les faits et gestes de l'un des meilleures sportifs mondial grâce à la nouvelle plateforme de Kylian Mbappé. Le carrefour d'une communication au plus proche de son public grâce à cette application première en son genre.</Text>
            <Player
                poster="https://res.cloudinary.com/aplu/image/upload/c_scale,h_800,q_50/v1536421585/Prototype-poster_gmohic.jpg"
                src="https://res.cloudinary.com/aplu/video/upload/c_scale,h_800/v1537374268/KMbappe-demo-1440_sxlihq.mp4"
                playsInline
            >
                <BigPlayButton position="center" />
            </Player>
        </Wrapper>
    </VideoContent>
)

const VideoContent = styled.div`
    background: #000000;
    padding-top: 120px;

    @media (max-width: 640px) {
        padding-top: 80px;
    }
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

    span {
        display: table;
        margin: auto;
    }

    @media (max-width: 640px) {
        max-width: 90%;
        margin: auto;
    }
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

    @media (max-width: 640px) {
        max-width: 90%;
        margin-bottom: 80px;
    }

`

export default Prototype