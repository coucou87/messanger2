export function reducer ( state, action ){
  if(action.type === "CONTACT-INFORMATION"){
      return {
          ...state,
          userInfo: action.userInfo
      }  
  }
  if(action.type === "MY-MESSAGE"){
    return {
        ...state,
        userInfo: action.userInfo
    }  
}
  return state
}