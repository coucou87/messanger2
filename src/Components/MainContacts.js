import React, {useState} from 'react'
import ContactsHeader from './ContactsHeader'
import Contacts from './Contacts'
// import PreChatHeader from './PreChatHeader'
import styled from 'styled-components'


const Wrapper = styled.div`
   border-right: 2px solid #ccc;
   border-bottom:1px solid #ccc;
   position: relative;
    max-width: 100%;
    width: 500px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.2s ease;

`

export default function MainContacts() {
  const [items,setItems]= useState(
    [
      {name: "Édith Piaf", id:'1', avatar:'/DATA/IMAGES/avatar.png', 
        chats:
        [
          {id:'1', message:'salut',time:'06:34',isOpen: false, reply:{},unreadMsg:'10'},
          {id:'2', message:'comment ca va?',time:'06:35',isOpen:false, reply:{},unreadMsg:'10'},
          {id:'3', message:'tu vien au cinema?',time:'06:36',isOpen:false, reply:{},unreadMsg:'10'}
        ]
       },
      {name: "Zaaz ", id:'2', avatar:'/DATA/IMAGES/avatar.png',
      chats:
        [
          {id:'1', message:'au revoir',time:'04:25',isOpen:false, reply:{},unreadMsg:'10'}
        ]
      },

      {name: "Dalida", id:'3', avatar:'/DATA/IMAGES/avatar.png',
       chats:
       [
         {id:'1', message:'un peu plus tard',time:'06:34',isOpen: false, reply:{},unreadMsg:'10'},
         {id:'2', message:'daccord',time:'10:35',isOpen:false, reply:{},unreadMsg:'10'}
        
       ]
      },
      {name: "Céline Dion", id:'4', avatar:'/DATA/IMAGES/avatar.png', 
      chats:
      [
        {id:'1', message:'salut',time:'06:34',isOpen: false, reply:{}, unreadMsg:'10'},
        {id:'2', message:'comment ca va?',time:'11:11',isOpen:false, reply:{}, unreadMsg:'10'},
        {id:'3', message:'Coucou Shokoufé',time:'11:12',isOpen:true, reply:{}, unreadMsg:'10'}
      ]
     }
  ])

  function handleClick(id) {
      const FindContact = items.find(item => item.id === id)
      console.log(FindContact)
  }
  return (
    <>
    <Wrapper>
       <ContactsHeader />
        {items.map(item => {
          const chats = [...item.chats]
          return (
          <Contacts 
            key={item.id} 
            text={item.name} 
            avatar={item.avatar} 
            lastMsgTime={chats[chats.length-1].time}
            lastText={chats[chats.length-1].message} 
            unreadMsg={chats[chats.length-1].unreadMsg}
            onClick={()=>handleClick(item.id)}
          />
          )
        })}
    </Wrapper>
    </>
  )
}