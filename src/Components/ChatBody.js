import React from 'react';
import styled from 'styled-components'
import Message from './Message'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px 0;
  width: 100%;
  height: 100%;
  background-color: #ece5dd;
  background-image: url("./DATA/IMAGES/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left:20px;
  overflow-x: hidden; 
  overflow-y: auto; 
  color:${props => (props.isMine) ? "blue" : "red"};
  align-self: ${props => (props.isMine) ? "flex-end" : "flex-start"};
`

export default function ChatBody({ text }) {

  return (
    <Wrapper >
      {text.map(
        item =>
          <Message
            key={item.id}
            id={item.id}
            txtMessage={item.message}
            messageTime={item.time}
            isMine={item.isMine}
          />
      )}
    </Wrapper>
  )
}