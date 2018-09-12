import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Hero = props => (
    <div>
        <Head />
        <QuoteWrapper>
            <Quote>Ma volonté est de créer le carrefour de tous mes outils de communication.</Quote>
            <Name>— Kylian Mbappe</Name>
        </QuoteWrapper>
        <News>
            <NewsScreen src="https://res.cloudinary.com/aplu/image/upload/v1536505473/KM-Timeline-phone2_yl6dyv.png" />
            <div className="grid">
                <Title>Ne manquez plus une miette</Title>
                <Text>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon. After you are done just click on the yellow checkmark button on the top right. Have Fun! Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon.</Text>
            </div>
        </News>
        <Analyze>
            <LeftTitle>Analysez chaque match</LeftTitle>
            <LeftText>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon. After you are done just click on the yellow checkmark button on the top right. Have Fun!</LeftText>
        </Analyze>
        <Stats>
            <StatsTitle>Des statistiques pensés pour vous</StatsTitle>
            <StatsText>Analysez les performances de Kylian durant chaque match et comparez-le à d'autres joueurs pour confirmer votre ressenti.</StatsText>
        </Stats>
        <Videos>
            <Title>Revivez les meilleurs moments</Title>
            <Text>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon.</Text>
        </Videos>
    </div>
)
const Head = styled.header`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536505004/heroImage_ixhkpm.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;

    @media (max-width: 640px) {
		
        img {
            max-width: 100%;
        }
	}
`
const QuoteWrapper = styled.div`
    background: #fafafa;
    border-radius: 8px;
    margin: 100px auto;
    padding: 64px 80px 40px;
    max-width: 55%;
    background-image: url('http://res.cloudinary.com/aplu/image/upload/o_10/v1536762014/quote_bssiet.png') ;
    background-repeat: no-repeat;
    background-position: 5% -20px;
`
const Quote = styled.h2`
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    max-width: 60%;
    margin: auto;
`
const Name = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: rgba(0,0,0,.5);
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    text-align: center;
    margin-top: 32px;
    font-style: italic;
`
const News = styled.div`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536505252/KM-Timeline-image7_ugtkrm.png');
    background-repeat: repeat-x;
    background-position: top center;
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    margin-top: -100px;

    @media (max-width: 640px) {
        max-width: 400px;
        background-position:cover;

        img {
            max-width: 100%;
        }
    }
`
const NewsScreen = styled.img`
    margin: 200px auto 0 auto;
`
const Analyze = styled.div`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536531044/gameslist_impgco.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: -100px 0;
    height: 900px;
    padding-left: 455px;
`
const Stats = styled.div`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536592621/wip-9_tuj4ad.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 200px 0;
    height: 700px;
    margin-bottom: 240px;
    /*padding-left: 455px;*/
`
const Videos = styled.div`
    background-image: url('http://res.cloudinary.com/aplu/image/upload/c_scale,q_100,w_998/v1536595303/wip-11_2x_a4l4dd.jpg');
    background-size: auto 558px;
    background-repeat: no-repeat;
    background-position: center 80px;
    height: 650px;
    margin-bottom: 180px;
    

    h1 {
        padding-top: 0;
    }
`
const Title = styled.h1`
    font-size: 40px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 0em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    text-align: center;
`
const Text = styled.p`
    font-size: 17px;
    line-height: 1.5;
    color: rgba(0,0,0,.75);
    text-align: center;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    max-width: 630px;
    margin: auto;
`
const LeftTitle = styled(Title)`
    text-align: left;
    padding-top: 362px;
    max-width: 500px;
    margin: auto;
    margin-bottom: 10px;
`
const LeftText = styled(Text)`
    text-align: left;
    max-width: 500px;
`
const StatsTitle = styled(LeftTitle)`
    margin-left: 20%;
    max-width: 400px;
`
const StatsText = styled(LeftText)`
    margin-left: 20%;
    max-width: 420px;
`
export default Hero