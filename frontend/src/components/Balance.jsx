import { useEffect, useState } from "react"
import axios from "axios"
const Balance =()=>{
    const[balance, setbalance] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
           headers:{
            Authorization: "Bearer"+ " " +localStorage.getItem("token")
           } 
        }).then(
            res=>setbalance(res.data.balance)
        )
    })
    return <div>
        <div className="font-bold text-center my-2">Your balance is Rs {balance}</div>
    </div>
}

export default Balance