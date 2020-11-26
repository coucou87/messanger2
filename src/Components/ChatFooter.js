import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import { FiPaperclip } from 'react-icons/fi'; 

const Wrapper = styled.div`
  display:flex;
  justify-content:space-around;
  height: 100px;
  background-color: #ededed;
  align-items:center;
`
const Clips = styled.span`
  color:#008B8B;
  font-size:1.3em;
`

const Input = styled.input`
   border-radius:9px;
   height:30px;
   width:90%;
   border:none;
   outline:none;
   background-color:white;

`
export default function ChatFooter(){
    const inputRef = useRef(null)

    useEffect(()=>{
       inputRef.current.focus()
    },[])

    return(
        <Wrapper >
           <Input ref={inputRef} type="text" placeholder=" Type a message..."></Input>
           <Clips><FiPaperclip/></Clips>
        </Wrapper>
        
    )


 }