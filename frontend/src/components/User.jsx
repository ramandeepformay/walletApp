import { useNavigate } from "react-router-dom";
import Button from "./Button";

const User = ({ user }) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between mt-3">
        <div className="flex justidy-center items-center">
          <div className=" mx-2 border rounded-full flex justify-center items-center w-10 h-10 bg-slate-300">{user.firstName[0].toUpperCase()}</div>
          <div className="flex justify-center items-center">{user.firstName[0].toUpperCase()+user.firstName.slice(1)}</div>
        </div>
        <Button onClick= {()=>{
            navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`)
        }}label="Send Money"/>
       
      </div>
    </div>
  )
};

export default User;
