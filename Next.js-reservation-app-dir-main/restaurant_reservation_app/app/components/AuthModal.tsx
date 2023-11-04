"use client"
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInput from './AuthModalInput';
import useAuth from '@/hooks/useAuth';
import { AuthenticationContext } from '../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


// interface State  {
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;
//   city: string;
//   password: string;
// }

export default function AuthModel({isSignin} : {isSignin : boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {signin ,signup} = useAuth() ;
  const {loading , error , data} = useContext(AuthenticationContext) ;

  const renderContent = (signinContent : string , signupContent : string) =>{
    return isSignin ? signinContent : signupContent
  }

   const handleChangeInput =(e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputs({
      ...inputs ,
      [e.target.name] : e.target.value 
    })
   }

  const [inputs , setInputs] = useState({
    firstName : "",
    lastName  : "" ,
    email : "" ,
    phone : "" ,
    city : "" ,
    password : "" 
  })

 
  const [disabled , setDisabled] = useState(true) ;

  useEffect(() => {
    if(isSignin){
      if(inputs.email&&inputs.password){
        return setDisabled(false) ;
       }
    }
    else {
      if(inputs.email 
        && inputs.firstName 
        && inputs.lastName 
        && inputs.password 
        && inputs.phone 
        && inputs.city ){
        return setDisabled(false)
      }
    }
  } , [inputs])

  const handleClick = () => {
    if(isSignin){
      signin({email : inputs.email , password : inputs.password} , handleClose)
    }else {
     signup(inputs  , handleClose)
    }
  }

  return (
    <div>
         <button 
          className={`${renderContent("bg-red-600 text-white" , "")} border  px-4 p-1 rounded-md mr-3`}
          onClick={handleOpen}
          >
        {renderContent( "Sign in" , "Sign up")}
        </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      { loading  ? <div className='py-24 px-2 h-[600px] flex justify-center'> 
        <CircularProgress sx ={{color:"#f44336"}} />
        </div> : <div className='p-2 h-[600px]'>
         { error ?  <Alert severity="error" className='mb-4'>
          {error}
          </Alert> : null}
             <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
                <p className='text-sm'>
                  {renderContent("Sign In" ,"Create Account")}
                </p>
             </div>
             <div className='m-auto'>
                <h2 className='text-2xl font-light text-center'>
                  {
                    renderContent(
                        "Log Into Your Account" ,
                        "Create Your Account"
                    )
                  }
                  <AuthModalInput isSignin = {isSignin} input = {inputs} handleChangeInput={handleChangeInput} data={ data?.email} />
                  <button disabled ={disabled}
                  className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'
                  onClick={handleClick}
                  >
                  {
                    renderContent(
                        "Sign In" ,
                        "Create Account"
                    )
                  }
                  </button>
                </h2>
             </div>
          </div>}
        </Box>
      </Modal>
    </div>
  );
}