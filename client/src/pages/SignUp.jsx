import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    

    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-40'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Chitranjan
            </span>
            Patel
          </Link>
          <p className='text-sm mt-5'>
          My name is Chitranjan Patel  CEO and MD of CPX Pvt Limited . I working as a Software Engineer with 1+ years of experience background in creating and executing innovative software solutions to enhance business productivity a wide range of  technology skills. Proven ability to leverage full-stack knowledge and experience to build interactive and user-censered website designs to scale.  Highly experienced in all aspects of the software development lifecycle and end-to-end project management,  from concept through to development and delivery Consistently recognized as a hands-on.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='text' placeholder='name@gmail.com' id='email' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <div>
              <Label value='Confirm password' />
              <TextInput type='text' placeholder='Confirm Password' id='cpassword' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}