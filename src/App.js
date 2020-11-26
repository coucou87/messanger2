
import MainContacts from './Components/MainContacts'
import Navigation from './Components/Navigation'
import ChatComponent from './Components/ChatComponent'

import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled.div`
  display:block;
  overflow-y:hidden;
  overflow-x:hidden;
  
`


export default function App() {
  const [items,setItems]= useState(
    [
      {name: "Édith Piaf", id:'1', avatar:'/DATA/IMAGES/avatar.png', 
        chats:
        [
          {id:'1', message:'salut',time:'06:34',isOpenent: false, reply:{},unreadMsg:'10'},
          {id:'2', message:'comment ca va?',time:'06:35',isOpenent:false, reply:{},unreadMsg:'10'},
          {id:'3', message:'tu vien au cinéma?',time:'06:36',isOpenent:false, reply:{},unreadMsg:'10'}
        ]
       },
      {name: "Zaaz ", id:'2', avatar:'/DATA/IMAGES/avatar.png',
      chats:
        [
          {id:'1', message:'au revoir',time:'04:25',isOpenent:false, reply:{},unreadMsg:'10'}
        ]
      },

      {name: "Dalida", id:'3', avatar:'/DATA/IMAGES/avatar.png',
       chats:
       [
         {id:'1', message:'un peu plus tard',time:'06:34',isOpenent: false, reply:{},unreadMsg:'10'},
         {id:'2', message:'daccord',time:'10:35',isOpenent:true, reply:{},unreadMsg:'10'}
        
       ]
      },
      {name: "Céline Dion", id:'4', avatar:'/DATA/IMAGES/avatar.png', 
      chats:
      [
        {id:'1', message:'salut',time:'06:34',isOpenent: true, reply:{}, unreadMsg:'10'},
        {id:'2', message:'comment ca va?',time:'11:11',isOpenent:true, reply:{}, unreadMsg:'10'},
        {id:'3', message:'Coucou Shokoufé',time:'11:12',isOpenent:true, reply:{}, unreadMsg:'10'}
      ]
     }
  ])
  const [showChatComponent,setShowChatComponent] = useState(false)
  const [userInfo,setUserInfo] = useState({})

  function HandlerFindContact(id) {
     const itemsCopy = [...items]
     const FindContact = itemsCopy.find(item => item.id === id)
     setUserInfo(FindContact)
     setShowChatComponent(true)
    }
    
   function HandlerMessage(){
     items.map(item=>{
      
       const chats=[...item.chats]
       
       return <p key={chats[0].id}>{console.log(chats.message)}</p>
       
     })
   }
    

  return (
    <>
      <Wrapper>
        <Navigation />
        <MainContacts items={items} clickHandler={(id) => HandlerFindContact(id)} />
        {showChatComponent &&
         <ChatComponent onAvatar={userInfo.avatar} textHandler={userInfo.name}  onCall={HandlerMessage}/>} 
      </Wrapper> 
    </>
  )
}


