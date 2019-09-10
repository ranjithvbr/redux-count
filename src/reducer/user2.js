import {update} from "../dispatch/updateuser.js"

export default function user2(state="",{type,payload}){
      switch(type){
        case update:
         return payload
      default:
          return state
      }
    }
