import React,{useState,useEffect,useRef} from 'react'
import "../../assets/styles/css/login.css";
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import "../../assets/styles/css/login.css"
import { useSelector } from 'react-redux';
import axios from 'axios';
import BaseUrl from "../../utils/constants/urls"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

const otpSendUrlSignUp = BaseUrl+'api/v1/otp/register';
const otpResend = BaseUrl + 'api/v1/register';

const  Otp = ()=> {

    const state = useSelector((state) => state.auth.signUpData);
    console.log("state",state);
    const loginButtonIsClicked = useSelector((state)=> state.auth.loginButtonIsClicked);
    const navigate = useNavigate();
    const [timer, setTimer] = useState('00:00');
    const [otp,setOtp] = useState()
    const Ref = useRef(null);
    const dispatch = useDispatch();
    const [overAttempt,setOverAttempt] = useState(false);
    const resendOtp = () => {

      axios({
        method: 'POST',
        mode:'no-cors',
        url: otpResend,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
        },
        withCredentials:false,
        credentials:'same-origin',
        data:JSON.stringify(state),
      })
        .then((res) => {
          if (res.data.status === 200) {
            setTimeIsUp(false);
            clearTimer(getDeadTime());
          }
        })
        .catch((err) => {
          if(err.message === 'Too Many Attempts.')
          {
            setOverAttempt(true);
            clearTimer(getDeadTime());

          }
          
        });
    }
    const handleOtpReq = () => {
     console.log("otp" ,otp);
     
      axios({
        method: 'POST',
        mode:'no-cors',
        url: otpSendUrlSignUp,
        data:otp,
      })
        .then((res) => {
          console.log("here");
          if (res.data.status === 200) {
            localStorage.setItem('token',res.data.data.token)
            // dispatch(
            //   authActions.login({
            //     token: res.data.data.token,
            //     firstname: res.data.data.user.firstname,
            //     lastname: res.data.data.user.lastname,
            //     mobile: res.data.data.user.mobile,
            //   })
            // );
            // dispatch(authActions.setToken())
            // navigate(0)
            navigate('/submenu')

            Swal.fire({
              icon: 'success',
              text: 'ثبت نام موفقیت آمیز بود!',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'باشه'
            })
            
          }
     
          
        })
        .catch((err) => {
          if(err.response.status === 403 || err.response.status === 404)
          {
            Swal.fire({
              icon: 'error',
              title: 'ای وای!',
              text: 'کد نامعتبر است!!',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'باشه'
            })
          }
        
        });
      
    }

    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      
      return {
          total, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total,  minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {
          setTimer(
              
              (minutes > 9 ? minutes : '0' + minutes) + ':'
              + (seconds > 9 ? seconds : '0' + seconds)
          )
          if(minutes === 0 && seconds === 0)
          {
            setTimeIsUp(true);
            setOverAttempt(false)
          }
      }
  }


  const clearTimer = (e) => {
      setTimer('02:00');
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }
  const [timeIsUp , setTimeIsUp] = useState(false)
  const getDeadTime = () => {
      let deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 120);
      // navigate('/')
      return deadline;
  }
  useEffect(() => {
      clearTimer(getDeadTime());
      
  }, []);

  return (
    <div className='login'>
      <div className='form'>
        {overAttempt ? 
        <div>
          لطفا پس از 2 دقیقه دوباره تلاش کنید.
          <div className='time-left'>زمان باقی مانده: {timer}</div>

        </div>
        :<>
        {timeIsUp ? 
        <button onClick={resendOtp}>ارسال مجدد کد</button>
        :  
        <>
             

             <TextField onChange={(e)=>setOtp({otp:e.target.value})}  id="filled-basic" fullWidth label="رمز یکبار مصرف" variant="filled" 

                  sx={{
                    "& .MuiFormLabel-root": {
                      
                        marginLeft:'68%'
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        marginLeft:'68%'

                    }
                  }}
        />
        <div className='time-left'>زمان باقی مانده: {timer}</div>
        <button type="submit" onClick={handleOtpReq}>ثبت</button>
        </>
        
        }
        </>
      }
    </div>
    </div>
  )
}

export default Otp
