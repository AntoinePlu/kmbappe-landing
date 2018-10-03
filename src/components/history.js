import React from 'react'
import styled from 'styled-components'
import Contact from './contact';

const History = props => (
	<HistoryWrapper>
        <ContentWrapper className="grid" id="makingof">
            <Title>Making-of</Title>
            <Text className="makingof-intro">Suite à la sortie du site <a src="http://kylianmbappe.com" target="_blank">kylianmbappe.com</a>, j'ai réalisé qu'il y avait une vrai belle idée méritant d'être développé pour passer un cap supérieur. Malgré le risque de travailler pour rien, je me devais de fournir l'effort nécessaire pour présenter ce que je pense être une nouvelle évolution dans la communication à la hauteur d'un sportif tel que Kylian.</Text>
            <Carrousel className="full">
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536790779/makingof-1_eexrky.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536790868/makingof-4_dqyc1z.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536790911/makingof-3_ijjazx.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536791046/comparison_goumz5.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536791095/makingof-6_lruxen.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536791132/makingof-8_trhoea.jpg" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/c_scale,h_500/v1536791172/makingof-2_olr3kb.jpg" height="500" />
            </Carrousel>
            <Text>Depuis le 10 mai, je suis parti avec cette idée folle de pouvoir allier mes passions tout en espérant pouvoir réaliser un rêve. Pas un seul moment je ne pouvais imaginer tous ce qui allait se passer durant les semaines à venir, et quelle joie immense vous alliez nous donner !  Je ne doutes pas de mon niveau ou de mes compétences, mais vais-je réussir à trouver le moyen de ne pas passer inaperçu une fois mon travail réalisé ? Parmis des centaines, des milliers de messages qu'il doit recevoir chaque jour, comment quelqu'un qui n'est personne peu attirer l'attention ?</Text>
            <Text>En attendant d'avoir une réponse, ma meilleure possibilité était de me faire remarquer par mon travail qui se doit d'être d'une exigence incomparable avant même de tenter toute tentative de contact.</Text>
            <Text>Me voilà 4 mois plus tard, après un nombre d'idées et d'essais incalculables, ayant réussi à diriger tous les aspects de ce projet, du business et la stratégie, en passant par le développement du produit, au design de cette application.</Text>
        </ContentWrapper>
        <QuoteWrapper>
            <Quote>Quand vous faites un projet, qu'est-ce qui est important ?<br/>C'est les hommes qui portent ça ! <span>[..]</span> Si vous avez affaire à des gens sérieux, compétents et surtout qui ont une parole, vous êtes tranquille.</Quote>
            <Name>— Wilfrid Mbappé</Name>
        </QuoteWrapper>
        <ContentWrapper className="grid" id="about">
            <Title>Qui suis-je ?</Title>
            <Text><a href="https://twitter.com/AntoinePlu" target="_blank">Antoine Plu</a>, designer indépendant sur Paris. Durant ces 8 dernières années, j'ai travaillé aux côté de différentes entreprises pour les aider à trouver des solutions à leurs problématiques.</Text>
            <Text>Grâce à mon expérience en agence de communication et social média ou encore dans le marketing mobile, j'ai choisis de me mettre à mon compte pour pouvoir utiliser ces compétences aux côtés de différentes sociétés.</Text>
            <Text>Je pense que le travail d'un designer à une double obligation entre le client par qui il est employé mais aussi à son audience à laquelle il a de devoir de créer ce qui est le plus adapté. Cette position d'intermédiaire doit servir de pont pour connecter les éléments entre les deux.</Text>
            <Text>Étant passionné du PSG mais encore plus par l'évolution de Kylian, je pense être la personne la plus compétente pour délivrer un tel projet et continuer d'améliorer sa communication auprès de son public.</Text>
            <Logos className="full" src="https://res.cloudinary.com/aplu/image/upload/v1536764236/logos_xiknts.png" />
            <Credits className="grid">
                <Signature src="https://res.cloudinary.com/aplu/image/upload/v1537657397/signature_ywkykg.png" />
                <Contact />
            </Credits>
        </ContentWrapper>
    </HistoryWrapper>
)


const HistoryWrapper = styled.div`
    margin: 0 auto;
    padding-top: 120px;
`
const ContentWrapper = styled.div`
    &#makingof { padding-top: 100px; }
    &#about { padding-top: 100px; }

    p:not(:nth-child(1)) {
        margin-bottom: 32px;
    }
`
const Title = styled.h1`
    margin: 0 0 32px;
    font-size: 40px;
    line-height: 1.4;
    font-weight: 600;
    letter-spacing: 0em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color:white;
`

const Text = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #6e6e7a;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;

    a {
        color: #2F80ED;
        text-decoration:none;

        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
const Carrousel = styled.div`
    
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 20px;
    overflow-x: auto;
    white-space: nowrap;
    margin: 80px 0;
    padding: 0 80px;

    img {
        background: #252429;
        border-radius: 4px;
    }

    @media (max-width: 640px) {
		padding: 0px 20px;
        margin: 10px 0 40px;

        img {
            max-height: 200px;
        }
	}
`
const QuoteWrapper = styled.div`
    background: #252429;
    border-radius: 8px;
    margin: 100px auto 0;
    padding: 64px 80px 40px;
    max-width: 880px;
    background-image: url('https://res.cloudinary.com/aplu/image/upload/o_30/v1536762014/quote_bssiet.png') ;
    background-repeat: no-repeat;
    background-position: 5% -20px;

    @media (max-width: 640px) {
        padding: 80px 0 40px;
        max-width: 90%;
        margin: 40px auto 0px !important;
    }
`
const Quote = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    max-width: 80%;
    margin: auto;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;

    span {
        color: #848490;
    }

    @media (max-width: 640px) {
        max-width: 90%;
    }
`
const Name = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #6e6e7a;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    text-align: center;
    margin-top: 32px;
    font-style: italic;
`
const Logos = styled.img`
    max-width: 100%;
    height: auto;
    margin: 80px auto 100px;

    @media (max-width: 640px) {
        max-width: 80%;
        height: auto;
    }
`
const Credits = styled.div`
    /*max-width: 60%;*/
    margin: 0 auto 200px auto;

    > .contactwrapper {
        width: 40%;
	    margin: auto;
    }
`
const ProfilePic = styled.img`
    max-width: 80px;
    height: auto;
    border-radius: 100%;
    margin: auto;
    margin-bottom: 16px;
`
const Author = styled.h3`
    color: white;
    margin: 0 auto;
    margin-bottom: 4px;
    letter-spacing: 0em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: white;
    font-weight: 500;
`
const Job = styled.p`
    color: #6e6e7a;
    margin: auto;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    letter-spacing: -.022em;
    margin-bottom: 0;
    margin-bottom: 32px;
`
const Links = styled.ul`
    list-style-type: none;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;

    a {
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        letter-spacing: -.022em;
        color: #2F80ED;
        text-decoration: none;

        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
const Signature = styled.img`
    margin: 0 auto 40px;
`

export default History