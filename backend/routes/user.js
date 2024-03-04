const express = require("express");
const z = require("zod");
const router = express.Router();
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./config.env" });
const JWT_SECRET = process.env.JWT_SECRET;

// zod validations
const signUpValidation = z.object({
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
});

const signInValidation = z.object({
  username: z.string(),
  password: z.string()
});

// signup route
router.post("/signup", async (req, res) => {
  try {
    const { success } = signUpValidation.safeParse(req.body);

  
    if (!success) {
      return res.status(411).json("Incorrect Input fields");
    }

    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(411).json("user already exists");
    }

    const newUser = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    });
    const userId = newUser._id;
    await Account.create({
        userId,
        balance: 200+ Math.floor(Math.random()*1000)
        
    })
    
    const token = jwt.sign({ userId }, JWT_SECRET);

    return res.status(200).json({
      msg: "User created successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("internal error");
  }
});


// signin route
router.post("/signin", async (req, res) => {
  try {
    const { success } = signInValidation.safeParse(req.body);
    if (!success) {
      return res.status(411).json("Incorrect i/p fields");
    }

    const existingUser = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(existingUser)
    if (!existingUser) {
      return res.status(411).json("User doesn't exist");
    }


    const token = jwt.sign({ userId: existingUser._userid }, JWT_SECRET);

    return res.status(200).json({token});
  } catch (error) {
    console.log(error);
    res.status(500).json("internal error");
  }
});

// filter 

router.get("/bulk", async(req,res)=>{
    try{
    const queryParam = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": queryParam
            }
        }, {
            lastname: {
                "$regex": queryParam
            }
        }]
    })
    console.log(users)
    res.json({users:users.map(user=>({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        })
    )})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
