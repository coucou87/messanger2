import MainContacts from './Components/MainContacts'
import Navigation from './Components/Navigation'
import ChatComponent from './Components/ChatComponent'
import styled from 'styled-components'
import { useReducer, useEffect} from 'react'
import {reducer} from './Components/reducer'

const Wrapper = styled.div`
  display:block;
  overflow-y:hidden;
  overflow-x:hidden;
`
export default function App() {
  // const [items, setItems] = useState()
  // const [showChatComponent, setShowChatComponent] = useState(false)
  // const [userInfo, setUserInfo] = useState({})
  // const [userChat, setUserChat] = useState({}) 

  const [{ items, showChatComponent, userInfo, userChat }, dispatch] = useReducer(reducer, {
    items: [
      {
        name: "Édith", id: 0, avatar: '/DATA/IMAGES/avatar.png', haveRead: false,
        chats:
          [
            { id: 1, message: 'salut', time: '06:34', isMine: false, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'comment ca va?', time: '06:35', isMine: false, reply: {}, unreadMsg: '10' },
            { id: 3, message: 'tu vien au cinéma?', time: '06:36', isMine: false, reply: {}, unreadMsg: '10' }
          ]
      },
      {
        name: "Zaaz ", id: 2, avatar: '/DATA/IMAGES/avatar.png', haveRead: false,
        chats:
          [
            { id: 1, message: 'au revoir', time: '04:25', isMine: false, reply: {}, unreadMsg: '10' }
          ]
      },
  
      {
        name: "Dalida", id: 3, avatar: '/DATA/IMAGES/avatar.png', haveRead: false,
        chats:
          [
            { id: 1, message: 'un peu plus tard', time: '06:34', isMine: false, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'daccord', time: '10:35', isMine: true, reply: {}, unreadMsg: '10' }
  
          ]
      },
      {
        name: "Céline", id: 4, avatar: '/DATA/IMAGES/avatar.png', haveRead: false,
        chats:
          [
            { id: 1, message: 'salut', time: '06:34', isMine: true, reply: {}, unreadMsg: '10' },
            { id: 2, message: 'comment ca va?', time: '06:35', isMine: true, reply: {}, unreadMsg: '10' },
            { id: 3, message: 'Coucou Shokoufé', time: '11:11', isMine: false, reply: {}, unreadMsg: '10' }
          ]
      }
    ], 
    showChatComponent: false,
    userInfo: {},
    userChat: {},
  })

  useEffect(() => {
    if (Object.getOwnPropertyNames(userChat).length > 0) {
      const copyItems = [...items]
      const itemIndex = items.findIndex(item => item.id === userInfo.id)
      const copyUserInfo = { ...userInfo }
      const copyUserInfoChat = [...userInfo.chats]
      copyUserInfoChat.push(userChat)
      copyUserInfo.chats = copyUserInfoChat
      userChat.isMine = true
      copyItems[itemIndex] = copyUserInfo
      //  setUserInfo(copyUserInfo)
      //  setItems(copyItems)
      //  setUserChat({})
      dispatch({
        type: 'CONTACT_INFORMATION',
        payload: copyUserInfo
      },
        {
          type: 'MY_MESSAGE',
          payload: copyItems
        },
        {
          type: 'CONTACT_MESSAGE'
        })
    }
  
  }, [userChat, userInfo, items])

  function handlerFindContact(id) {
    const itemsCopy = [...items]
    const findContact = { ...itemsCopy.find(item => item.id === id) }
    const itemIndex = items.findIndex(item => item.id === id)
    findContact.haveRead = true
    itemsCopy[itemIndex] = findContact
    setItems(itemsCopy)
    setUserInfo(findContact)
    setShowChatComponent(true)
  }

  function handlekeyPress(text) {
    const chatId = userInfo.chats.length + 1
    setUserChat({
      id: chatId,
      message: text,
      time: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
      }),
      isMine: false,
      reply: {},
      unreadMsg: '10'
    }
    )
  }
  function handlerDelete() {
    setShowChatComponent(false)
  }
  return (
    <Wrapper>
      <Navigation />
      <MainContacts
        items={items}
        clickHandler={(id) => handlerFindContact(id)}
      />
      {showChatComponent &&
        <ChatComponent
          deleteHandler={() => handlerDelete(userInfo.id)}
          handleKey={handlekeyPress}
          isMine={userChat.isMine}
          AvatarHandler={userInfo.avatar}
          textHandler={userInfo.name}
          message={userInfo.chats}
        />}
    </Wrapper>
  )
}
