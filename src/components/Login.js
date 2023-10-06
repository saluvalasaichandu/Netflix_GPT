import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const[isSignInForm,setIsSignInForm]=useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
    return(
    <div>
       <Header/>
       <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Logo"/>
       </div>
        <form className=" w-1/3 absolute bg-black p-12  my-60 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80 cursor-pointer" >
            <h1 className="font-bold text-3xl p-4  text-center">{ isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-900"/>}
            <input type="text" placeholder="Email or Phone number" className="p-4 my-4 w-full bg-gray-900"/>
            <input type="password" placeholder="Password"  className="p-4 my-4 w-full  bg-gray-900"/>
            <button  className="p-4 my-6 bg-red-600  w-full rounded-xl">{ isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="p-4" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now":"Already registered sign in now"}</p>
        </form>
    </div>)
}
export default Login;