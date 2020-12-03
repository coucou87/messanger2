
import MainContacts from './Components/MainContacts'
import Navigation from './Components/Navigation'
import ChatComponent from './Components/ChatComponent'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Wrapper = styled.div`
  display:block;
  overflow-y:hidden;
  overflow-x:hidden;
  
`


export default function App() {
  const [items, setItems] = useState(
    [
      {
        name: "Édith Piaf", id: '1', avatar: '/DATA/IMAGES/avatar.png',
        chats:
          [
            { id: 1, message: 'salut', time: '06:34', isOpenent: false, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'comment ca va?', time: '06:35', isOpenent: false, reply: {}, unreadMsg: '10' },
            { id: 3, message: 'tu vien au cinéma?', time: '06:36', isOpenent: false, reply: {}, unreadMsg: '10' }
          ]
      },
      {
        name: "Zaaz ", id: '2', avatar: '/DATA/IMAGES/avatar.png',
        chats:
          [
            { id: 1, message: 'au revoir', time: '04:25', isOpenent: false, reply: {}, unreadMsg: '10' }
          ]
      },

      {
        name: "Dalida", id: '3', avatar: '/DATA/IMAGES/avatar.png',
        chats:
          [
            { id: 1, message: 'un peu plus tard', time: '06:34', isOpenent: false, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'daccord', time: '10:35', isOpenent: true, reply: {}, unreadMsg: '10' }

          ]
      },
      {
        name: "Céline Dion", id: '4', avatar: '/DATA/IMAGES/avatar.png',
        chats:
          [
            { id: 1, message: 'salut', time: '06:34', isOpenent: true, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'comment ca va?', time: '06:35', isOpenent: true, reply: {}, unreadMsg: '10' },
            { id: 3, message: 'Coucou Shokoufé', time: '11:11', isOpenent: false, reply: {}, unreadMsg: '10' }
          ]
      }
    ])
  const [showChatComponent, setShowChatComponent] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [userChat, setUserChat] = useState([]) 
  const [idFinder, setIdFinder] = useState('')

  function handlerFindContact(id) {
    const itemsCopy = [...items]
    const findContact = itemsCopy.find(item => item.id === id)
    setUserInfo(findContact)
    setShowChatComponent(true)
    setIdFinder(id) // when press enter in chat view, find user chat id
  }

  ///////////
  function handlekeyPress(e) {
    const itemsCopy = [...items]
    const findContact = itemsCopy.find(item => item.id === idFinder)
    setUserInfo(
      {
       name:findContact.name,
       id:findContact.id,
       avatar:findContact.avatar, 
    chats:
    findContact.chats.concat(
      {
        id:findContact.chats.length+1,
        message:e.target.value,
        time:new Date().toLocaleTimeString(undefined, {
             hour: '2-digit',
             minute: '2-digit' 
           }),
       isOpenent:false,
       reply:{},
       unreadMsg:'10'
     }
    )
      })

      useEffect(()=>{
        const copyUserInfo = [...userInfo]

      },[newPm])


    // setItems([])
    // setItems(
    //   itemsCopy.concat(
    //     {
    //       name: findContact.name,
    //       id: findContact.id,
    //       avatar: findContact.avatar,
    //       chats:
    //         findContact.chats.concat(
    //           {
    //             id: findContact.chats.length + 1,
    //             message: e.target.value,
    //             time: new Date().toLocaleTimeString(undefined, {
    //               hour: '2-digit',
    //               minute: '2-digit'
    //             }),
    //             isOpenent: false,
    //             reply: {},
    //             unreadMsg: '10'
    //           }
    //         )
    //     }
    //   )
    
   

    //   console.log(
    //  findContact.chats.concat(
    //     {
    //       id:findContact.chats.length+1,
    //       message:e.target.value,
    //       time:new Date().toLocaleTimeString(undefined, {
    //            hour: '2-digit',
    //            minute: '2-digit' 
    //          }),
    //      isOpenent:false,
    //      reply:{},
    //      unreadMsg:'10'
    //    }
    //   )

    // )



    // userChatInfo.chats.push({
    //   id:findContact.chats.length+1,
    //   message:e.target.value,
    //   isOpenent:false,
    //   time:new Date().toLocaleTimeString(undefined, {
    //     hour: '2-digit',
    //     minute: '2-digit' 
    //   })
    // })
  }

  return (
    <>
      <Wrapper>
        <Navigation />
        <MainContacts
          items={items}
          clickHandler={(id) => handlerFindContact(id)}
        />
        {showChatComponent &&
          <ChatComponent
          handleKey={handlekeyPress}
            AvatarHandler={userInfo.avatar}
            textHandler={userInfo.name}
            message={userInfo.chats}
            setChatState={userInfo.chats}
          />}
      </Wrapper>
    </>
  )
}


