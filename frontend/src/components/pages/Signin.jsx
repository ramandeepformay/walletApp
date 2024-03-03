import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import InputBox from "../Inputbox";
import Button from "../Button";
import BottomWarning from "../BottomWarning";

const Signin = () => {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const usernameRef = useRef(null);
const passwordRef = useRef(null);
const clickHandler =async ()=>{
    console.log(username,password)
    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
        username,
        password
    })
    console.log(response)
    const token = response.data.token;
    console.log(token)
    localStorage.setItem("token", token);
    usernameRef.current.value="",
    passwordRef.current.value=""
}
  return (
    <div>
      <div className="bg-slate-400 h-screen flex flex-col justify-center">
        <div className="shadow-2xl rounded-lg w-80 mx-auto bg-white p-4 h-max">
          <Heading label="Sign in" />
          <SubHeading />
          <InputBox
            label="Email"
            placeholder="John@gmail.com"
            ref={usernameRef}
            onChange={(e) => setusername(e.target.value)}
          />
          <InputBox
            label="Password"
            placeholder="123456"
            ref={passwordRef}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button label="Sign in" onClick={clickHandler} />
          <BottomWarning label="Sign up" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
