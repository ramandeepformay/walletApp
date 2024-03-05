import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Sendmoney = () => {
    const [params] =useSearchParams();
    const name = params.get("name");
    const id = params.get("id")
    const [value, setValue] = useState("")
    const [transfer, setTransfer] = useState("")
   
    const clickHandler =async ()=>{
      
        const res = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                to: id,
                amount: value
            },{
                headers:{
                    Authorization: "Bearer" + " "+localStorage.getItem("token")
                }
            })
            return setTransfer(res.data.msg)
        }
    

    return (
    <div className="bg-slate-300 h-screen flex flex-col justify-center">
      <div className="w-96 bg-white h-80 mx-auto rounded shadow-lg">
        <div className="flex flex-col justify-around h-full">
          <div className="text-center font-black text-3xl">Send Money</div>
          <div className="ml-8">
          <div className="flex">
            <div className="border rounded-full bg-green-600  w-10 h-10 flex items-center justify-center text-xl text-white">{name[0].toUpperCase()}</div>
            <div className="ml-4 font flex items-center font-bold text-lg">{name[0].toUpperCase()+name.slice(1)}</div>
          </div>
          <div>
            <div className="font-semibold my-2">Amount</div>
            <input type="text" placeholder="Enter amount" className="my-2 w-80 border rounded-md p-2 " value={value} onChange={e=>setValue(e.target.value)}/>
          </div>
          <div className="flex flex-col justify-center items center">
            <button className="bg-green-600 p-2 text-center mt-2 text-white w-80 rounded" onClick={clickHandler}>{transfer==""? "Initiate Transfer":"Done"}</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Sendmoney;
