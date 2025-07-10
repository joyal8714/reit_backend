const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({msg:"no valid token is available here"})

        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if (err) return res.status(403).json({msg:"not verified"})
                req.user=decoded;
            next()
        })
}   