const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const md5 = require("md5")
module.exports=(req,res,next)=>{
//    console.log(req.headers)
if(req.headers.authorization){
let authorization=req.headers.authorization
const token = authorization.replace("Bearer ", "");
jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err || payload === undefined) {
      console.log(`some error in verifying jwt secret${err}`);
      res.status(403).json({ error: true, msg: "some error in verifying jwt secret" })
    }
else{
  let  md5UserId=payload.secretId
            req.body.userId = md5UserId;
 next()
      
}
})

}
else{
  res.status(503).json({ error: true, msg: "Auth not found" })
}
}