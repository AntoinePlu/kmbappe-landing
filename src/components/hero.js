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
                <Title>Ne manquez plus un instant</Title>
                <Text>Retrouvez dans un seul et même endroit, toutes les informations de votre joueur favoris. Photos, vidéos, presse ou encore debrief de match, consommez tous ce qui vous intéresse comme vous le voulez et où vous voulez.</Text>
            </div>
        </News>
        <Analyze className="full">
            <Fixture
                src="https://res.cloudinary.com/aplu/image/upload/v1536940147/fixture-list_bm5619.png" />
            <div>
                <LeftTitle>Chaque match.<span>Dans les moindres détails.</span></LeftTitle>
                <LeftText>Sous le maillot de nos deux cher étoile ou en Rouge et Bleu, chaque match est à votre portée de main en quelques clics seulement. Des résumés détaillés et bien sûr les statistiques personnelles de Kylian ou d'un de ses coéquipiers. </LeftText>
            </div>
        </Analyze>
        <Stats>
            <SeasonStats
                src="https://res.cloudinary.com/aplu/image/upload/v1536791318/stats_yppyu7.jpg" />
            <div>
                <StatsTitle>Analyser les performances à travers les années</StatsTitle>
                <StatsText>Ne cherchez plus où trouvez l'ensemble des statistique de Kylian, vous venez de le trouver. La nouvelle référence impressionne sur le terrain comme dans sa communication et vous le prouve une nouvelle fois en mettant à disposition de ses fans, les données toutes compétitions confondues de ses performances.</StatsText>
            </div>
        </Stats>
        <Videos>
            <Title>Revivez en image les meilleurs moments</Title>
            <Text>Reportage, documentaire, résumé de l'année ou encore meilleure vidéos de fans, votre champion du monde se livre auprès des cameras des médias sans langue de bois. Revivez les plus beaux moments de la saison grâce à cette selection.</Text>
            <img src ="https://res.cloudinary.com/aplu/image/upload/v1536791270/videos_xefisq.jpg" />
        </Videos>
    </div>
)
const Head = styled.div`
    height: 700px;
    display: flex;
    padding-top: 100px;

    img {
        max-width: 100%;
        margin: auto;
    }

    @media (max-width: 640px) {
        height: 480;
        max-width: 100%;
        overflow: hidden;
        margin: 0;
        padding-top: 0;

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
    font-weight: 500;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    max-width: 60%;
    margin: auto;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;

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

    p {
        max-width: 610px;
    }

    @media (max-width: 640px) {
        margin-top: 10px;

        img {
            max-width: 100%;
            margin-top: 120px;
        }

        p {
            max-width: 100%;
	        padding: 0;
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
        span {
            display: table;
        }
    }
    @media (max-width: 640px) {
        padding-left: 0;
        background-size: auto;
        background-position: 0;
        max-width: 100%;
	    overflow: hidden;
        flex-direction: column;

        img { max-width: 75%; }
        
        div {
            margin: 0;

            h1 { 
                max-width: 330px;
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
        max-width: 470px;
    }

    p {
        max-width: 460px;
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
                max-width: 100%;
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
    /*background-image: url('https://res.cloudinary.com/aplu/image/upload/v1536791270/videos_xefisq.jpg');
    background-size: auto 558px;
    background-repeat: no-repeat;
    background-position: center 80px;
    height: 650px;*/
    margin-bottom: 180px;
    display: flex;
	flex-direction: column;

    h1 {
        padding-top: 0;
    }

    img {
        min-width: 998px;
        margin: auto;
    }

    @media (max-width: 640px) {
        background-size: auto 56%;
        background-position: center 90%;
        margin-bottom: 0;
        height: auto;
        padding-bottom: 40px;

        h1 {
            max-width: 90%;
            margin: auto;
        }

        p {
            max-width: 90%;
            margin-top: 12px;
        }

        img {
            max-width: 420px;
	        margin: 0 0 0 -20px;
	        min-width: 0;
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