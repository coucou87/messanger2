import React from 'react'
import styled from 'styled-components'

const darkmodeBgColor = "#0f1724";
const secondaryColor = "#1d2636";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;
  cursor: pointer;
  background-color: ${(props) => (props.darkmode ? darkmodeBgColor : "#fff")};
  border-bottom: ${(props) =>
    props.darkmode
      ? `1px solid ${secondaryColor}`
      : "1px solid #e6e6e6"}; //1d2636
  padding: 0 20px;
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.darkmode ? secondaryColor : "#e9e2dc80"};
  }
`

const Image = styled.img`
    border-radius:50%;
    margin-left: 10px;
    width:50px;
    height:50px;
`
const Information = styled.div`
    display:flex;
   
    flex-flow: column;
    padding-top: 0px; 
    margin-left:20px;
`

const Name = styled.h3`
   margin-bottom: 0px;
`
const LastText = styled.p`
     margin-top: 0px;  
    
`


const Time = styled.span`

  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  display:flex;
  float:right;
 
`

const Info = styled.span`
    display:flex;
    flex-flow: column;
    padding-top: 0px; 
    margin-left:20px;
    text-align:center;
    
 
`

const MinWrapper= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    
`

const UnreadMessage =styled.span`
     background-color:#DCDCDC;
     border-radius:50%; 
     

`
export default function Contacts({text, avatar, lastText, lastMsgTime, unreadMsg, onClick}){
    return (
       <>
        <Wrapper onClick={onClick}>
            <Image src={avatar} />
            <MinWrapper>
              <Information>
                  <Name>{text}</Name>
                  <LastText>{lastText}</LastText>  
                </Information>
                <Info>
                  <Time>{lastMsgTime}</Time>
                  <UnreadMessage>{unreadMsg}</UnreadMessage>
                </Info>
            </MinWrapper>
        </Wrapper>
       </>
    )
}