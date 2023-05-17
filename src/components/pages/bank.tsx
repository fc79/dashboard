import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from '@reduxjs/toolkit';
import {actionCreators, State} from "../../redux/index"
function Bank() {
    const dispatch = useDispatch();
    const {deposit, withdraw,bankrupt} = bindActionCreators(actionCreators,dispatch)
    const amount = useSelector((state:State)=>  state.bank  )
    
  return (
    <div>
        <h1>{amount}</h1>
      <button onClick={()=>deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
      <button onClick={()=>bankrupt()}>bankrupt</button>

    </div>
  )
}

export default Bank
