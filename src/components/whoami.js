import React from 'react'
import styled from 'styled-components'

const WhoAmI = props => (
    <Wrapper className="grid" id="whoami">
        <ContentWrapper>
            <Title>Qui suis-je ?</Title>
            <Text>Antoine Plu, designer indépendant sur Paris. Durant ses 8 dernières années, j'ai travaillé aux côté de différentes entreprises pour les aider à trouver des solutions à leurs problématiques.</Text>
            <Text>Grâce à mon expérience en agence de communication et social média ou encore dans le marketing mobile, j'ai choisis de me mettre à mon compte pour pouvoir utiliser ces compétences avec différentes sociétés.</Text>
            <Text>Je crois au fait que le travail d'un designer à une double allégeance entre le client par qui il est payé mais aussi l'audience à laquelle il a une obligation. Cette position d'intermédiaire doit servir de pont pour connecter les éléments entre les deux.</Text>
            <Text>Étant passionné des Rouges et Bleus mais encore plus par l'évolution de Kylian,    je pense être la personne la plus compétente pour servir de passerelle entre ce projet et son public.</Text>
            <Logos>
                <Canal src="static/images/canal.svg"/>
                <Accor src="static/images/accorhotels.svg"/>
                <Orange src="static/images/orange.svg"/>
                <Bnp src="static/images/bnp.svg"/>
                <Allianz src="static/images/allianz.svg"/>
            </Logos>
        </ContentWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
    margin: 0;
`
const ContentWrapper = styled.div`
    background: #252429;
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 180px;
`
const Title = styled.h1`
    margin: 0 auto 48px auto;
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
    margin-bottom: 24px;
`

const Logos = styled.div`
    max-width: 960px;
`
const Canal = styled.img``
const Accor = styled.img``
const Orange = styled.img``
const Bnp = styled.img``
const Allianz = styled.img``

export default WhoAmI