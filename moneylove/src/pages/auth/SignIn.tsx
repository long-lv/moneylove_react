import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoginImage from "~/assets/login.png"
import { loginApi } from "~/features/authSlide";
const Wrapper = styled.div`
  background-color : #E5E5E5;
`;
const SignIn = () =>{

  const [user,setUser] = useState({
    email : "",
    password : ""
  })
  const dispatch = useDispatch();
  const check = (text : string) =>{
    console.log(text);
  }
  const handelLogin = () =>{
    dispatch(loginApi({user,check}))
  }
  return (
    <>
    <Wrapper className="w-50 flex h-screen">
      <div className="wrapper-left flex items-center justify-center">
        <img src={LoginImage} className="w-2/3"/>
      </div>
      <div className="wrapper-right w-full flex items-center justify-center">
        <div style={{backgroundColor : "#ffffff"}} className="w-2/3 h-1/2">
          <h3>Welcome to</h3>
          <h3>Design School</h3>
          <button>Login with Google</button>
          <button>Login with Facebook</button>
          <input type="text" placeholder="Email" value={user.email} onChange={(e) => setUser({...user,email : e.target.value})}/>
          <input type="text" placeholder="Password" value={user.password} onChange={(e) => setUser({...user,password : e.target.value})} />
          <button onClick={handelLogin}>Login</button>
        </div>
      </div>
    </Wrapper>
    </>
  )
}

export default SignIn;