// Action creator
import { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "../../types/actoins/index"
import {Action} from "../../interface or models/actions"

 export const deposit = (amount:number)=>{
    return (dispath: Dispatch<Action>) =>{
        dispath({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}
export const withdraw = (amount:number)=>{
    return (dispath: Dispatch<Action>) =>{
        dispath({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}
export const bankrupt = ()=>{
    return (dispath: Dispatch<Action>) =>{
        dispath({
            type: ActionType.BANKRUPT,
           
        })
    }
}