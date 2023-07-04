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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login,{isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state)=> state.auth)

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/')
        }catch(err){
            toast.error(err?.data?.message || err.error)
        }
    };
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo])

    return(
       <div className='credentialsContainer'>
        <Container>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='inputField'>
                        <h6>Email or username</h6>
                        <input className='emailInput' 
                        type="text" 
                        placeholder='Email address or name'
                        value={email} 
                        onChange = {(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='passwordField'>
                        <div className='passwordHeadings'>
                            <span><h6>Password</h6></span>
                            <span><h6 className='forgetPass'>Forgot your password?</h6></span>
                        </div>
                        <input className='passwordInput'
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange= {(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <Button>Sign In</Button>
                </form>

                <button className='createAccountBtn'>Create your account</button>
            </Container>
       </div>
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