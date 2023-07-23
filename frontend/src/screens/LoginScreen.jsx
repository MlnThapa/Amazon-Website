import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';




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
       <div className='relative h-[91vh] w-screen  flex justify-center items-center credentialsContainer'>
        <div className='absolute h-4/6 w-96 rounded-md border border-[#595959]'>
                <h2 className='w-full h-16 flex justify-center items-center text-2xl font-medium'>Sign In</h2>
                <form className='w-full h-4/6 flex-col flex justify-around' onSubmit={handleSubmit}>
                    <div className='h-[23%] w-full bg-orang flex-col flex justify-between inputField'>
                        <h6 className='ml-3 text-sm font-medium'>Email or username</h6>
                        <input className='w-[93%] h-1/2 ml-3 emailInput' 
                        type="text" 
                        placeholder='Email address or name'
                        value={email} 
                        onChange = {(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='h-[23%] w-full flex-col flex justify-between passwordField'>
                        <div className='h1/2 w-[93%] ml-3 text-sm font-medium flex justify-between passwordHeadings'>
                            <span><h6>Password</h6></span>
                            <span><h6 className='forgetPass'>Forgot your password?</h6></span>
                        </div>
                        <input className='w-[93%] h-1/2 ml-3 passwordInput'
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange= {(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <div className='h-10 w-[93%] ml-3 flex justify-center'><button className='h-full w-full bg-orange rounded-md'>Sign In</button></div>
                </form>
                <div  className='h-10 w-[93%] ml-3 flex justify-center'><button className='h-full w-full bg-gray rounded-md createAccountBtn'>Create your account</button></div>
            </div>
       </div>
    )
}


export default LoginScreen