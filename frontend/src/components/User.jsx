import { useNavigate } from "react-router-dom";
import Button from "./Button";

const User = ({ user }) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between mt-3">
        <div className="flex">
          <div className=" mx-2 border rounded-full flex justify-center items-center px-4 bg-slate-300">U</div>
          <div className="flex justify-center items-center">{user.firstName}</div>
        </div>
        <Button onClick= {()=>{
            navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`)
        }}label="Send Money"/>
       
      </div>
    </div>
  )
};

export default User;
