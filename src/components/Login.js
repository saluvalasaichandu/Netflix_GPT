import Header from "./Header";

const Login=()=>{
    return(
    <div>
       <Header/>
       <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Logo"/>
       </div>
        <form className=" w-1/3 absolute bg-black p-12  my-60 mx-auto right-0 left-0 text-white">
            <h1 className="font-bold text-3xl p-4  text-center">Sign in</h1>
            <input type="text" placeholder="Email or Phone number" className="p-2 my-2 w-full"/>
            <input type="password" placeholder="Password"  className="p-2 my-2 w-full"/>
            <button  className="p-2 my-4 bg-red-600  w-full ">Sign In</button>
        </form>
    </div>)
}
export default Login;