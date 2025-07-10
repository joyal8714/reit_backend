const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register=async(req,res)=>{
    const{username,email,password,role}=req.body
const existing=await User.findOne({email})
if(existing) return res.status(400).json({msg:"user allready registered"})


    const hashed= await bcrypt.hash(password,10)
  const user=await User.create({username,email,password:hashed,role})

  res.json({msg:"user is registerd"})
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ msg: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ msg: `Welcome ${user.username}`, token });
};

