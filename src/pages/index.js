import React from 'react'
import styled from 'styled-components'

import Hero from '../components/hero'
import Prototype from '../components/prototype'
import History from '../components/history'

import '../layouts/grid.css'



const IndexPage = () => (
  <div>
    <Hero />
    <Prototype  className="full"/>
    <BottomWrapper className="full">
      <History className="full" />
    </BottomWrapper>
  </div>
)

const BottomWrapper = styled.div`
  background: #121217;
`



export default IndexPage
