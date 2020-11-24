import React, {useState} from 'react';
import styled from 'styled-components'
import { RiCloseLine } from 'react-icons/ri'; 
import { IoMdMore } from 'react-icons/io';

const Wrapper = styled.div`
  background-color:#ededed ;
  display:flex;
  /* width: calc(100% - 500px); */
  height:60px;
  justify-content:space-around;
  align-items:center;
`
const Name = styled.h3`   
`
const Photo = styled.span`
  width:50px;
  height:50px;   
`
const MoreIcon = styled.span`
  color:#008B8B;
  font-size:1.7em;
  font-weight:3000;
`
const CloseIcon = styled.span`
  color:#008B8B;
  font-size:1.6em;
  font-weight:bold;
`
const InfoWrapper = styled.div`
  display: block;
`

export default function ChatHeader ({text, avatar}){
 
  return(
    <>
      <Wrapper>
        <CloseIcon><RiCloseLine/></CloseIcon>
          <InfoWrapper>
            <Photo>{avatar}</Photo>
            <Name>{text}</Name>
          </InfoWrapper>
        <MoreIcon><IoMdMore/></MoreIcon>
      </Wrapper>
    </>
  )
}