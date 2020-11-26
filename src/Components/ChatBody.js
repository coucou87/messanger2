import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.reply ? "10px 0" : "70px 0")};
  height: 100%;
  background-color: #ece5dd;
  background-image: url("./DATA/IMAGES/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease;
  overflow-y: hidden; 
`

const Message = styled.p`


`
export default function ChatBody({ss}){

    return(
        <Wrapper>
           <Message>{ss}</Message>
        </Wrapper>
    )
 }