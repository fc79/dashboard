import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
        className="login"
        onSubmit={values => {
          navigate("/bank")
 
        }}
      >
        {({}) => (
       
  
         <div>
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
                          textAlign:'right'
                        }
                        ,
                        "& input":{
                          fontSize:"18px",
                      
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