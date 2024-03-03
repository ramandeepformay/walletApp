const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./config.env" });
const DBString = process.env.DBSTRING;
mongoose.connect(DBString);

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    lowecase: true,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
