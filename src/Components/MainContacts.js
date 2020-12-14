import React from 'react'
import ContactsHeader from './ContactsHeader'
import Contacts from './Contacts'
import styled from 'styled-components'

const Wrapper = styled.div`
   border-right: 2px solid #ccc;
   border-bottom:1px solid #ccc;
   position: absolute;
   left:0;
    max-width: 100%;
    width: 500px;
    height: calc(100% - 40px);
    overflow-y: hidden;
    overflow-x: hidden;
    @media (max-width: 768px) {
      width: 350px;
  }
`
export default function MainContacts({ items, clickHandler }) {
  return (
    <Wrapper>
      <ContactsHeader />
      {items.map(item => {
        const chats = [...item.chats]
        return (
          <Contacts
            haveRead={item.haveRead}
            isUnread={chats[chats.length - 1].isUnread}
            key={item.id}
            text={item.name}
            avatar={item.avatar}
            lastMsgTime={chats[chats.length - 1].time}
            lastText={chats[chats.length - 1].message}
            unreadMsg={chats[chats.length - 1].unreadMsg}
            onClick={() => clickHandler(item.id)}
          />
        )
      })}
    </Wrapper>
  )
}