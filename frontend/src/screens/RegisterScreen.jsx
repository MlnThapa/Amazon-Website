import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useRegisterMutation} from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';
import {toast} from 'react-toastify';



function RegisterScreen() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, {isLoading}] = useRegisterMutation()

    const {userInfo} = useSelector((state)=> state.auth)

    

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword){
            toast.error('Passwords do not match')
        }else{
            try{
                const res = await register({name,email,password}).unwrap();
                dispatch(setCredentials({...res}));
                navigate('/login')
            }catch(err){
                toast.error(err?.data?.message || err.error)
            }
        }
    }
    useEffect(()=>{
        if(userInfo){
            navigate('/login')
        }
    },[navigate,userInfo])

  return (
     <div className='relative h-[91vh] w-screen  flex justify-center items-center credentialsContainer'>
       <div className='absolute h-[75%] w-96 border rounded-md border-[#595959]'>
            <h2 className='w-full h-12 flex justify-center items-center text-2xl font-medium'>Create account</h2>
            <form className='w-full h-4/6 flex-col flex justify-around ' onSubmit={handleSubmit}>
                <div className='h-[23%] w-full mt-5 flex-col flex justify-between nameField'>
                    <h6 className='ml-3 text-sm font-medium'>Username</h6>
                    <input className='w-[93%] h-[30px] ml-3 text-sm nameInput'
                    type="text" 
                    placeholder='User name' 
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='h-[23%] w-full mt-5 flex-col flex justify-between emailField'>
                    <h6 className='ml-3 text-sm font-medium'>Email</h6>
                    <input className='w-[93%] h-[30px] ml-3 text-sm emailInput' 
                    type="email" 
                    placeholder='Email address' 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='h-[23%] w-full mt-5 flex-col flex justify-between passwordField'>
                    <h6 className='ml-3 text-sm font-medium'>Password</h6>
                    <input className='w-[93%] h-[30px] ml-3 text-sm passwordInput' 
                    type="password" 
                    placeholder='Password' 
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className='h-[23%] w-full mt-5 flex-col flex justify-between confirmField'>
                    <h6 className='ml-3 text-sm font-medium'>Confirm password</h6>
                    <input className='w-[93%] h-[30px] ml-3 text-sm  confirmPassInput' 
                    type="password" 
                    placeholder='Confirm password' 
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <div className='w-[93%] ml-3 mt-10 flex justify-center'><button className='h-[30px] w-full bg-orange rounded-md'>Sign Up</button></div>
                {isLoading && <Loader />}
            </form>

            <div className='mt-10 flex justify-center createAccountBtn'>Already have an account? <Link>SignIn</Link></div>
        </div>
       </div>
  )
}


export default RegisterScreen