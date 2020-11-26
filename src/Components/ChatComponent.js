import React from 'react';
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import styled from 'styled-components'


const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    position: absolute;
    right:0;
    width: calc(100% - 500px);
    overflow-y:hidden;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 40px);
  
`
export default function ChatComponent ({onAvatar, textHandler, onCall}){
   

    return(
        <>
        <Wrapper>
           <ChatHeader avatar={onAvatar} text={textHandler}/> 
           <ChatBody ss={ onCall()}/>
           <ChatFooter />
        </Wrapper>  
        </>
    )
}