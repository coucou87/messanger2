import React from 'react';
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import styled from 'styled-components'


const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    width: calc(100% - 500px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  
`
export default function ChatComponent (){


    return(
        <>
        <Wrapper>
           <ChatHeader /> 
           <ChatBody />
           <ChatFooter />
        </Wrapper>
            
        </>
    )
}