export function reducer ( state, action ){
  return (HANDLERS[action.type] || (()=>state))(state, action.payload)
  
  
  
//   if(action.type === "CONTACT-INFORMATION"){
//       return {
//           ...state,
//           userInfo: action.userInfo
//       }  
//   }
//   if(action.type === "MY-MESSAGE"){
//     return {
//         ...state,
//         userInfo: action.userInfo
//     }  
// }
//   return state
}

export const ACTIONS = {
  CONTACT_INFORMATION : 'CONTACT_INFORMATION',
  MY_MESSAGE : 'MY_MESSAGE',
}


const HANDLERS = {
  [ACTIONS.CONTACT_INFORMATION] : handleContactInfo, 
  [ACTIONS.MY_MESSAGE] : handleMyMessage
}

function handleContactInfo (state, payload){
  return {
    ...state,
    userInfo: payload
}
}
  
function handleMyMessage (state, payload){
  return {
    ...state,
    userInfo: userInfo
  }
}