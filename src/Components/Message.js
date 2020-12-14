import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
    margin-bottom: 20px;
    width:fit-content;
    height: 30px;
    border: 1px solid none;
    background-color: white;
    border-radius: 5px;
    position: relative;
    min-width: 45px;
    max-width: 650px;
    text-align: justify;
    align-items:flex-start;
    margin-right:${props => (props.isMine) ? "" : "auto"};
    margin-left:${props => (props.isMine) ? "auto" : ""};
    margin-right: ${props => (props.isMine) ? "40px" : ""};
    background-color: ${props => (props.isMine) ? "#88cc00" : "white"};
`
const MessageLabel = styled.label`
`
const TimeLabel = styled.label`
  font-size:12px;
  color:#5c8a8a;
`
export default function Message({ messageTime, txtMessage, isMine }) {
    return (
        <Wrapper
            isMine={isMine}
        >
            <MessageLabel>
                {txtMessage}
            </MessageLabel>
            <TimeLabel>
                {messageTime}
            </TimeLabel>
        </Wrapper>
    )
}