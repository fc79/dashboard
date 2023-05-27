import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import "../../assets/styles/css/login.css"
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import BaseUrl from "../../utils/constants/urls"
import {
  ThemeProvider,
  createTheme
} from "@mui/material/styles";
import Swal from 'sweetalert2'

const SignUp = () => {
const [errorPhone,setErrorPhone] = useState("");
const [errorName,setErrorName] = useState("")
const [errorLastName,setErrorLastName] = useState("")
const navigate = useNavigate();
const registerUrl = BaseUrl+'api/v1/register';
const dispatch = useDispatch();
const rtlTheme = createTheme({ direction: "rtl" });
const [overAttempt,setOverAttempt] = useState(false)

function validatePhone(value) {
  
  if (!value) {
    setErrorPhone('مقدار نمی تواند خالی باشد!');
  } else if (!/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/.test(value)) {
    setErrorPhone("مقدار صحیح نمی باشد!")
  }
  else 
  setErrorPhone("")
  return errorPhone;
}

function validateName(value) {
  
  if (!value) {
    setErrorName('مقدار نمی تواند خالی باشد!');
  }
  else
    setErrorName("")
  return errorName;
}
function validateLastName(value) {
  
  if (!value) {
    setErrorLastName('مقدار نمی تواند خالی باشد!');
  }
  else
     setErrorLastName("")
  return errorLastName;
}

React.useLayoutEffect(() => {
  document.body.setAttribute("dir", "rtl");
}, []);

return(
  <ThemeProvider theme={rtlTheme}>

    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        mobile:""
      }}
      onSubmit={values => {
       
        axios({
          method: 'POST',
          mode:'no-cors',
          url: registerUrl,
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
            console.log(res);
            if (res.data.status === 200) {
              
              dispatch(
                authActions.signUp({
                  signUpData: values,
                })
              );
              navigate('/otp-register');
              
            }
          })
          .catch((err) => {
           if(err.message === 'Request failed with status code 429')
           {
            setOverAttempt(true);
            
           }
           if(err.message === 'Request failed with status code 422');
            {
              Swal.fire({
                icon: 'error',
                title: '!ای وای',
                text: 'شماره همراه تکراری است!',
               confirmButtonColor: '#3085d6',
               confirmButtonText: 'باشه'
              })
            }
           
          });
      }}
    >
      {({}) => (
     

       <div className="login">
       <div className="form">

        <span>ثبت نام</span>
        <Form>
          {overAttempt ? <div>لطفا پس از 2 دقیقه دوباره تلاش کنید</div>
          :
          <>
          <Field  name="firstname" 
          validate={validateName} >

              {({ field }) => {
                    return <TextField {...field} id="standard-basic" fullWidth placeholder="نام" variant="standard" 

                    sx={{
                      "& input::placeholder": {
                        fontSize: "16px",
                        fontFamily:"IRANSansWeb"
                      },
                      "& input":{
                        fontSize:"18px",
                        fontFamily:"IRANSansWeb"

                      }
                      ,
                      marginBottom:"10%"
                  }}
   />

                  }}
            </Field>
          <div className='error'>{errorName}</div>

          <Field name="lastname" 
         
          validate={validateLastName}>
              {({ field }) => {
                    return <TextField {...field} id="standard-basic" fullWidth placeholder="نام خانوادگی" variant="standard" 

                    sx={{
                      "& input::placeholder": {
                        fontSize: "16px",
                        fontFamily:"IRANSansWeb"
                      },
                      "& input":{
                        fontSize:"18px",
                        fontFamily:"IRANSansWeb"

                      },
                      
                      marginBottom:"10%"
                  }}
                  />

                  }}
            </Field>
            <div className='error'>{errorLastName}</div>
          
          <Field name="mobile" 
          validate={validatePhone} >
              {({ field }) => {
                    return <TextField {...field} id="standard-basic" fullWidth placeholder="شماره همراه" variant="standard" 

                    sx={{
                      "& input::placeholder": {
                        fontSize: "16px",
                        fontFamily:"IRANSansWeb"
                      }
                      ,
                      "& input":{
                        fontSize:"18px",
                        fontFamily:"IRANSansWeb",
                    
                      }
                      
                  }}
                  
   />

                  }}
            </Field>
          <div className='error'>{errorPhone}</div>

          <button type="submit" className='submitButton'>ثبت نام</button>
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
export default SignUp