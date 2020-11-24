import React, { useState,useRef,useEffect,forwardRef } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { BiArrowBack } from 'react-icons/bi'; 

const Wrapper = styled.div`
    width:500px;
    height: 60px;
    background-color: #ededed ;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const Label= styled.h2``
const Icon1= styled.span`
    margin-right:20px;
    color:#008B8B;
    font-size:1.2em;
`
const Icon2= styled.span`
    margin-left:20px;
    color:#008B8B;
    font-size:1.5em;
`

const Icon3= styled.span`
    margin-left:20px;
    color:#008B8B;
    font-size:1.3em;
`

const Input= styled.input`
    background-color:#ededed;
    border:none ;
    outline:none;
  

`

export default function ContactsHeader (){
    const [show,setShow] = useState(false)

    function handleClick(){
        setShow(!show)
    }
    
    return (
        <Wrapper>
    {!show && <Icon2><BiMenu/></Icon2>} {show && <Icon3><BiArrowBack/></Icon3> }
    {!show && <Label>Messager Génial</Label>}
    {show && <Input ></Input>}
    {!show && <Icon1 onClick={handleClick}><FaSearch/></Icon1>}
        </Wrapper>
    )
}