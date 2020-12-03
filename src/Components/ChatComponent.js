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
    overflow-x:hidden;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 40px);
    @media (max-width: 768px) {
      width: calc(100% - 350px);
  }
`
export default function ChatComponent(
    { AvatarHandler,
        textHandler,
        message,
        handleKey,
        isMine,
        deleteHandler }
) {
    return (
        <>
            <Wrapper>
                <ChatHeader
                    avatar={AvatarHandler}
                    text={textHandler}
                    deleteHandler={deleteHandler}
                />
                <ChatBody
                    text={message}
                    isMine={isMine}
                />
                <ChatFooter
                    onKey={handleKey}
                />
            </Wrapper>
        </>
    )
}