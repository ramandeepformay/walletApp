const express = require("express");
const { Account } = require("../db");
const router = express.Router();
const auth = require("./middleware");
const { default: mongoose } = require("mongoose");

router.get("/balance", auth, async (req,res)=>{
    const account = await Account.findOne({userId:req.userId});
    res.status(200).json({
        balance: account.balance
    })
})

router.post("/transfer", auth, async (req,res)=>{
    console.log(req.body)
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to, amount} = req.body
    const account = await Account.findOne({userId:req.userId}).session(session)
    if(!account || account.balance < amount){
        await session.abortTransaction()
        return res.json({msg:"Insufficent balance"})
    }
    const toAccount = await Account.findOne({userId: to}).session(session)
    if(!toAccount){
        await session.abortTransaction()
        return res.json({msg:"Account Invalid"})
    }

    await Account.findOneAndUpdate({userId:req.userId}, {$inc: {balance:-amount}}).session(session)
    await Account.findOneAndUpdate({userId:to}, {$inc:{balance:amount}}).session(session)

    session.commitTransaction()
    res.json({msg:"Transfer Successful"})

})




module.exports = router
