import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';
import styled from 'styled-components'



const LoginScreen=()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }
    useEffect(()=>{
        
    },[])

    return(
       <>
       <Container>
            <h2>Sign In</h2>
            <form onSubmit={()=>handleSubmit()}>
                <div className='inputField'>
                    <h6>Email or username</h6>
                    <input className='emailInput' type="text" placeholder='Email address or name' onClick={()=>{}}/>
                </div>
                <div className='passwordField'>
                    <div className='passwordHeadings'>
                        <span><h6>Password</h6></span>
                        <span><h6 className='forgetPass'>Forgot your password?</h6></span>
                    </div>
                    <input className='passwordInput' type="text" placeholder='Password' onClick={()=>{}}/>
                </div>
                <Button>Sign In</Button>
            </form>

            <button className='createAccountBtn'>Create your account</button>
        </Container>
       </>
    )
}

const Container = styled.div`
    height:400px;
    width:300px;
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
    .inputField{
        padding:10px;
    }
    h6{
        margin-left:2.5%;
        text-transform:uppercase;
    }
    .forgetPass{
        margin:0;
    }
    .emailInput{
        width:95%;
        margin-left:2.5%;
        margin-top:2%;
        padding-top:5px;
        border:1px solid #d3d3d3;
        border-radius:4px;
    }
    .passwordField{
        margin-top:5%;
        padding:10px;
    }
    .passwordHeadings{
        display:flex;
        justify-content:space-between;
        width:95%;
        margin-left:2.5%;
    }
    .passwordInput{
        width:95%;
        margin-left:2.5%;
        margin-top:2%;
        padding-top:5px;
        border:1px solid #d3d3d3;
        border-radius:4px;
    }
    .createAccountBtn{
        padding:5px;
        width:90%;
        margin-left:5%;
        margin-top:10%;
        background:#d3d3d3;
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


export default LoginScreen