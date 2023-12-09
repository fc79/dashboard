import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from '@reduxjs/toolkit';
import {actionCreators, State} from "../../redux/index"
import { Stack, styled } from '@mui/material';
import { red, green, yellow } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';

function Bank() {
    const dispatch = useDispatch();
    const {deposit, withdraw,bankrupt} = bindActionCreators(actionCreators,dispatch)
    const amount = useSelector((state:State)=>  state.bank  )
    const GreenButton = styled(Button)<ButtonProps>(( theme:any ) => ({
      color: theme.palette?.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    }));
    const RedButton = styled(Button)<ButtonProps>(( theme:any ) => ({
      color: theme.palette?.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    }));
    const YellowButton = styled(Button)<ButtonProps>(( theme:any ) => ({
      color: theme.palette?.getContrastText(yellow[600]),
      backgroundColor: yellow[600],
      '&:hover': {
        backgroundColor: yellow[700],
      },
    }));

  return (
    <div className='bank'>
        <span>{amount}</span>
        <Stack direction="row" spacing={2}>
              <GreenButton  variant="contained" onClick={()=>deposit(1000)}>Deposit</GreenButton>
              <YellowButton variant="contained" onClick={() => withdraw(500)}>Withdraw</YellowButton>
              <RedButton variant="contained" onClick={()=>bankrupt()}>bankrupt</RedButton>
        </Stack>
      

    </div>
  )
}

export default Bank
