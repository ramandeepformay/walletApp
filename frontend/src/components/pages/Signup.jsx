import Heading from "../Heading";
import SubHeading from "../SubHeading";
import InputBox from "../Inputbox";
import Button from "../Button";
import BottomWarning from "../BottomWarning";
import axios from "axios";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstname, setfirstname] = useState("");  
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate =useNavigate()
  const clickHandler = async ()=>{
    const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
         username,
         firstname,
         lastname,
         password
     })

    localStorage.setItem("token", response.data.token)
    firstnameRef.current.value=""
    lastnameRef.current.value=""
    usernameRef.current.value=""
    passwordRef.current.value=""
    navigate("/dashboard")
  } 

  return (
    <div className="bg-slate-400 h-screen flex flex-col justify-center">
      <div className="shadow-2xl rounded-lg w-80 mx-auto bg-white p-4 h-max">
        <Heading label={"Sign up"} />
        <SubHeading />
        <InputBox label="First Name" placeholder="John" ref={firstnameRef} onChange={e=>setfirstname(e.target.value)}/>
        <InputBox label="Last Name" placeholder="Doe" ref={lastnameRef} onChange={e=>setlastname(e.target.value)}/>
        <InputBox label="Email" placeholder="raman@gmail.com" ref={usernameRef} onChange={e=>setusername(e.target.value)}/>
        <InputBox label="Password" placeholder="123456" ref={passwordRef} onChange={e=>setpassword(e.target.value)}/>
        <Button label="Sign up" onClick={clickHandler}/>
        <BottomWarning label="Sign in" to="/signin" />
      </div>
    </div>
  );
};

export default Signup;
