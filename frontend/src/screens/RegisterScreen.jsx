import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';
import styled from 'styled-components'


function RegisterScreen() {

    function handleSubmit(e){
        e.preventDefault();
    }

  return (
     <>
       <Container>
            <h2>Create account</h2>
            <form onSubmit={()=>handleSubmit()}>
                <div className='nameField'>
                    <h6>Username</h6>
                    <input className='nameInput' type="text" placeholder='User name' onClick={()=>{}}/>
                </div>
                <div className='emailField'>
                    <h6>Email</h6>
                    <input className='emailInput' type="text" placeholder='Email address' onClick={()=>{}}/>
                </div>
                <div className='passwordField'>
                    <div className='passwordHeadings'>
                        <span><h6>Password</h6></span>
                    </div>
                    <input className='passwordInput' type="password" placeholder='Password' onClick={()=>{}}/>
                </div>
                <div className='confirmField'>
                    <h6>Confirm password</h6>
                    <input className='confirmPassInput' type="password" placeholder='Confirm password' onClick={()=>{}}/>
                </div>
                <Button>Create your account</Button>
            </form>

            <div className='createAccountBtn'>Already have an account? <Link>SignIn</Link></div>
        </Container>
       </>
  )
}

const Container = styled.div`
    height:500px;
    width:350px;
    border:1px solid #d3d3d3;
    border-radius:5px;

    >h2{
        text-transform:uppercase;
        margin-left:5%;
        padding-top:10px;
        letter-spacing:1px;
    }

    form{
        margin-top:7%;
    }
    .nameField{
        padding:10px;
    }
    .emailField{
        padding:10px;
    }
    .confirmField{
        padding:10px;
    }
    h6{
        margin-left:2.5%;
        text-transform:uppercase;
    }
    .forgetPass{
        margin:0;
    }
    input{
        width:95%;
        margin-left:2.5%;
        margin-top:2%;
        padding-top:5px;
        border:1px solid #d3d3d3;
        border-radius:4px;
    }
    .passwordField{
        padding:10px;
    }
    .passwordHeadings{
        display:flex;
        justify-content:space-between;
        width:95%;
        margin-left:2.5%;
    }
    .passwordInput{
        // width:95%;
        // margin-left:2.5%;
        // margin-top:2%;
        // padding-top:5px;
        // border:1px solid #d3d3d3;
        // border-radius:4px;
    }
    .createAccountBtn{
        font-size:0.9em;
        width:90%;
        margin-left:5%;
        margin-top:10%;
        border:none;
        border-radius:4px;
    }
    ::placeholder {
        font-size:0.9em;
        padding:0 0 0 5px;
        opacity: 1; /* Firefox */
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size:0.9em;
        padding:0 0 0 5px;
        opacity: 1;
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        font-size:0.9em;
        padding:0 0 0 5px;
        opacity: 1;
      }
`

const Button = styled.button`
    padding:5px;
    width:90%;
    margin-left:5%;
    margin-top:5%;
    background:#ffc100;
    border:none;
    border-radius:4px;
`

export default RegisterScreen