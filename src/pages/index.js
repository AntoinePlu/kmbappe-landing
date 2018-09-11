import React from 'react'
import styled from 'styled-components'
import History from '../components/history';
import WhoAmI from '../components/whoami';
import Prototype from '../components/prototype';
import '../layouts/grid.css'
import Hero from '../components/hero';


const IndexPage = () => (
  <div>
    <Hero />
    <Prototype  className="full"/>
    <BottomWrapper className="full">
      <History className="full" />
      <WhoAmI className="grid"/>
    </BottomWrapper>
  </div>
)

const BottomWrapper = styled.div`
  background: #121217;
`



export default IndexPage
