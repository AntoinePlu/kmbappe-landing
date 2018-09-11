import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const History = props => (
	<HistoryWrapper id="makingof">
        <ContentWrapper className="grid">
            <Title>Making Of</Title>
            <Text>Suite à la sortie du site <a src="http://kylianmbappe.com">kylianmbappe.com</a>, j'ai réalisé qu'il y avait une vrai idée qui méritait d'être développé pour passer un cap au dessus. Malgré le risque de travailler pour rien, je me devais de fournir l'effort nécessaire pour présenter ce que je pense être une nouvelle évolution dans la communication à la hauteur d'un sportif tel que Kylian.</Text>
            <Carrousel className="full">
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536497412/wip-1_xmhaov.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536497412/wip-3_ujbuzq.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536497412/wip-4_s7v3j5.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536502045/wip-8_qcxwtu.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536501258/wip-5_nnuxqf.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536501259/wip-6_wwswzn.png" height="500" />
                <img src="https://res.cloudinary.com/aplu/image/upload/v1536501259/wip-7_ub8awj.png" height="500" />
            </Carrousel>
            <Text>Depuis le 25 mai, je suis parti avec cette idée folle de pouvoir allier mes passions tout en espérant de pouvoir réaliser un rêve. Pas un seul moment je pouvais imaginé tous ce qui allait se passer durant les semaines à venir (et quelle joie immense vous nous avez donné !). Je sais au fond de moi que j'ai le niveau, je suis sûr de mes compétences, mais vais-je réussir à trouver le moyen de ne pas passer inaperçu une fois mon travail réalisé ? Parmis des centaines, des milliers de messages qu'il doit recevoir chaque jour, comment quelqu'un qui n'est personne peu attirer l'attention ?</Text>
            <Text>En attendant d'avoir une réponse, ma meilleure possibilité était de me faire remarquer par mon travail qui se doit d'être d'une exigence incomparable avant même de tenter tout contact.</Text>
            <Text>Me voilà 4 mois plus tard, après un nombre d'idées et d'essais incalculable, ayant réussi à diriger tous les aspects de ce projet tout en prévoyant la suite.</Text>
        </ContentWrapper>
    </HistoryWrapper>
)

const HistoryWrapper = styled.div`
    
    margin: 0 auto 80px auto;
    padding-top: 180px;
`
const ContentWrapper = styled.div`
    p:not(:nth-child(-1n+2)) {
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
		
        img {
            max-height: 200px;
        }
	}
`

export default History