import React from 'react';
import styled from 'styled-components'
import { RiCloseLine } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';

const Wrapper = styled.div`
  background-color:#ededed ;
  display:flex;
  /* width: calc(100% - 500px); */
  height:100px;
  justify-content:space-around;
  align-items:center;
`
const Name = styled.h3`   
`
const Photo = styled.img`
  width:50px;
  height:50px;   
  padding-right:20px;
  border-radius:50%;
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
  align-items:center;
  display:flex;
  flex-flow: row;
`
export default function ChatHeader(
  {
    text,
    avatar,
    deleteHandler
  }
) {

  return (
    <Wrapper>
      <CloseIcon>
        <RiCloseLine
          onClick={deleteHandler}
        />
      </CloseIcon>
      <InfoWrapper>
        <Photo src={avatar} />
        <Name>{text}</Name>
      </InfoWrapper>
      <MoreIcon>
        <IoMdMore />
      </MoreIcon>
    </Wrapper>
  )
}