
import MainContacts from './Components/MainContacts'
import Navigation from './Components/Navigation'
import ChatComponent from './Components/ChatComponent'

import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`

export default function App() {

  return (
    
    <>
      <Navigation />
        <Wrapper>
          <MainContacts />
          <ChatComponent />
        </Wrapper>
    </>
  )
}

 
