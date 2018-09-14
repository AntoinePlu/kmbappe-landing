import React from 'react'
import styled from 'styled-components'

const Hero = props => (
    <div>
        <Head id="presentation" className="full">
            <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,w_1280/v1536791366/hero-1_xi0ian.jpg" />
        </Head>
        <QuoteWrapper>
            <Quote>Ma volonté est de créer le carrefour de tous mes outils de communication.</Quote>
            <Name>— Kylian Mbappe</Name>
        </QuoteWrapper>
        <News>
            <NewsScreen src="https://res.cloudinary.com/aplu/image/upload/v1536939459/news-1_vkntvb.png" />
            <div className="grid">
                <Title>Ne manquez plus une miette</Title>
                <Text>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon. After you are done just click on the yellow checkmark button on the top right. Have Fun! Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon.</Text>
            </div>
        </News>
        <Analyze className="full">
            <Fixture
                src="https://res.cloudinary.com/aplu/image/upload/v1536940147/fixture-list_bm5619.png" />
            <div>
                <LeftTitle>Débrieffez de chaque match</LeftTitle>
                <LeftText>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon. After you are done just click on the yellow checkmark button on the top right. Have Fun!</LeftText>
            </div>
        </Analyze>
        <Stats>
            <SeasonStats
                src="https://res.cloudinary.com/aplu/image/upload/v1536791318/stats_yppyu7.jpg" />
            <div>
                <StatsTitle>Avec toutes les stats, plus rien ne peux vous échapper</StatsTitle>
                <StatsText>Analysez les performances de Kylian durant chaque match et comparez-le à d'autres joueurs pour confirmer votre ressenti. Analysez les performances de Kylian durant chaque match et comparez-le à d'autres joueurs pour confirmer votre ressenti.</StatsText>
            </div>
        </Stats>
        <Videos>
            <Title>Revivez les meilleurs moments</Title>
            <Text>Hey there, this is the default text for a new paragraph. Feel free to edit this paragraph by clicking on the yellow edit icon.</Text>
        </Videos>
    </div>
)
const Head = styled.div`
    height: 700px;
    margin-top: 40px;
    display: flex;

    img {
        max-width: 100%;
        margin: auto;
    }

    @media (max-width: 640px) {
        height: 480;
        max-width: 100%;
        overflow: hidden;
        margin: 0;

        img {
            max-width: 200%;
	        margin-left: -53%;
        }
	}
`
const QuoteWrapper = styled.div`
    background: #fafafa;
    border-radius: 8px;
    margin: 100px auto;
    padding: 64px 80px 40px;
    max-width: 800px;
    background-image: url('https://res.cloudinary.com/aplu/image/upload/o_10/v1536762014/quote_bssiet.png') ;
    background-repeat: no-repeat;
    background-position: 5% -20px;

    @media (max-width: 640px) {
        padding: 80px 0 40px;
        max-width: 90%;
        margin: 24px auto 64px auto;
    }
`
const Quote = styled.h2`
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    max-width: 60%;
    margin: auto;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;

    @media (max-width: 640px) {
        max-width: 90%;
    }
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
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536941612/KM-Timeline-2_haxc4w.jpg');
    background-repeat: repeat-x;
    background-position: top center;
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    @media (max-width: 640px) {
        margin-top: 10px;

        img {
            max-width: 100%;
            margin-top: 120px;
        }
    }
`
const NewsScreen = styled.img`
    margin: 160px auto 0 auto;
	max-height: 850px;
`
const Analyze = styled.div`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536939967/fixture-bg_g4kuin.jpg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0;
    display: flex;
    justify-content: center;
    align-items: center;


    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: flex-start;
        margin-left: 24px;

        h1 { 
            padding-top: 0;
            margin-top: 0;
            margin-left: 24px;
        }

        p {
            margin: inherit;
        }
    }
    @media (max-width: 640px) {
        padding-left: 0;
        background-size: auto;
        background-position: 0;
        max-width: 100%;
	    overflow: hidden;
        flex-direction: column;
        
        div {
            margin: 0;

            h1 { 
                max-width: 300px;
                margin: 0 auto 0.5em auto;
	            text-align: center;
                padding-top: 450px;
                padding-top: 0;
            }

            p {
                max-width: 90%;
                margin: 0 auto 80px auto;
                text-align: center;
            }
        }
    }
`
const Fixture = styled.img`

`
const Stats = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 240px;
    margin-left: 12%;
    
    img {
        margin-left: 0;
    }
    div {
        margin: 120px -120px 0 0;
    }

    h1 {
        margin-top: 0;
        margin-left: 0;
        padding-top: 0;
        max-width: 450px;
    }

    p {
        max-width: 450px;
        margin-left: 0;
    }

    @media (max-width: 640px) {
        margin-bottom: 120px;
        flex-direction: column;
        margin-left: 0;
        max-width: 100%;
	    overflow: hidden;
        
        img {
            max-height: 500px;
            margin: auto;
            margin-left: -19%;
        }
        div {
            margin: 32px 0 40px 0;
            
            h1 { 
                text-align: center;
                margin: 0 auto 0.5em auto;
                max-width: 75%;
            }

            p {
                margin: 0 auto;
                max-width: 90%;
                text-align: center;
            }
        }
    }
`
const SeasonStats = styled.img`
    max-height: 750px;
`
const Videos = styled.div`
    background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536791270/videos_xefisq.jpg');
    background-size: auto 558px;
    background-repeat: no-repeat;
    background-position: center 80px;
    height: 650px;
    margin-bottom: 180px;
    
    h1 {
        padding-top: 0;
    }

    @media (max-width: 640px) {
        background-size: auto 56%;
        background-position: center 90%;
        margin-bottom: 0;
        height: 440px;

        h1 {
            max-width: 90%;
            margin: auto;
        }

        p {
            max-width: 90%;
            margin-top: 12px;
        }
    }
`
const Title = styled.h1`
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    text-align: center;
    margin-bottom: 0.5em;
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
    margin-bottom: 0.5em;
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