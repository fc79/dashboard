import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import "../../assets/styles/css/login.css"
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import Swal from 'sweetalert2'
import BaseUrl from "../../utils/constants/urls";
import { WithStyles } from '@mui/styles';

import {
  ThemeProvider,
  createTheme
} from "@mui/material/styles";

const Login = ()=>{
    const [errorPhone,setErrorPhone] = useState("");
    const navigate = useNavigate();
    const loginUrl = BaseUrl+'api/v1/login';
    const dispatch = useDispatch();
    const rtlTheme = createTheme({ direction: "rtl" });
    const [overAttempt,setOverAttempt] = useState(false);

    function validatePhone(value) {
  
        if (!value) {
          setErrorPhone('!مقدار نمی تواند خالی باشد');
        }else if (!/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/.test(value)) {
          setErrorPhone("!مقدار صحیح نمی باشد")
        }
        else 
        setErrorPhone("")
        return errorPhone;
      }
      
return(
    <ThemeProvider theme={rtlTheme}>
      <Formik
        initialValues={{
          mobile:""
        }}
        onSubmit={values => {
          axios({
            method: 'POST',
            mode:'no-cors',
            url: loginUrl,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': '*',
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
            },
            withCredentials:false,
            credentials:'same-origin',
            data:JSON.stringify(values),
          })
            .then((res) => {
              if (res.data.status === 200) {
                dispatch(
                  authActions.login({
                    loginData: values,
                  })
                );
                
                navigate('/otp-login');
                
              }
            })
            .catch((err) => {
             if(err.message === 'Request failed with status code 429')
             {
              setOverAttempt(true)
             }
             if (err.response.status === 500 )
             {
              Swal.fire({
                 icon: 'error',
                 title: '!ای وای',
                 text: '!شما ثبت نام نکرده اید',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'باشه'
               })
             }
             console.log("error",err);
            });
        }}
      >
        {({}) => (
       
  
         <div className="login">
         <div className="form">
  
          <span >ورود</span>
          <Form>
            {overAttempt ? <div>لطفا پس از 2 دقیقه دوباره تلاش کنید</div>
            :
            <>
            
            <Field name="mobile" 
            validate={validatePhone} >
                {({ field }) => {
                  
                      return <TextField {...field} id="standard-basic" fullWidth placeholder="شماره همراه" variant="standard" 

                      sx={{
                        "& input::placeholder": {
                          fontSize: "16px",
                          fontFamily:"IRANSansWeb",
                          textAlign:'right'
                        }
                        ,
                        "& input":{
                          fontSize:"18px",
                          fontFamily:"IRANSansWeb",
                      
                        }
                        
                    }}
                    
                    //   InputLabelProps={{
                    //     style: { color: 'red',textAlign:'right'}, 
                    //  }}
                      // InputLabelProps={{sx:{textAlign:'right',display:'flex'}}}
                    //   InputProps={{
                    //     sx: {
                    //         "& input": {
                    //             textAlign: "center"
                    //         }
                    //     }
                        
                    // }}
     />
  
                    }}
              </Field>
            <div className='error'>{errorPhone}</div>
            <a href ="/signup" >.حساب ندارید؟ ثبت نام کنید.</a>
            <button className='submitButton' type="submit">ورود</button>
            </>
            }
          </Form>
  
          </div>
          </div>
        )}
      </Formik>
      
   
    </ThemeProvider>
  )
        };
export default Login