"use client"
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function AuthModel({isSignin} : {isSignin : boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const renderContent = (signinContent : string , signupContent : string) =>{
    return isSignin ? signinContent : signupContent
  }
  return (
    <div>
         <button 
          className={`${renderContent("bg-red-600 text-white" , "")} border  px-4 p-1 rounded-md mr-3`}
          onClick={handleOpen}
          >
        {renderContent( "Sign in" , "Sign out")}
        </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='p-2'>
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
                </h2>
             </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}