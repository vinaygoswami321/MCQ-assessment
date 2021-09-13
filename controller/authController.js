const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
var validator = require("validator");
const userModel = require("../model/userModel");
const UserPanel = require("../model/UserPanel");

/////////------ User SignUp ----////////////////

exports.Signup = (req, res) => {
  const { name, email, password } = req.body;
  // const mobileNumber = req.body.mobileNumber ? req.body.mobileNumber : null;
  /**  name:string, 
    mobileNumber:number,
    password:string,
   */
  if (validator.isEmail(email)) {
    if (password.length > 8) {
      userModel.findOne({ email: email }).then((user) => {
        if (user) {
          res.status(404).json({ error: "email Address is already taken" });
        } else {
          bcryptjs.hash(password, 12).then((hashedpassword) => {
            let newStudent = new userModel({
              email: email,
              password: hashedpassword,
              name: name,
            });
            //  console.log('done');
            newStudent
              .save()
              .then((user) => {
                // console.log(user);
                const token = jwt.sign(
                  { secretId: user._id },
                  process.env.JWT_SECRET
                );
                res.json({
                  message: "SignUp Success",
                  token: token,
                  email: user.email,
                  name: user.name,
                  userId: user._id,
                });
              })
              .catch((err) => {
                //   console.log(err.message)
                res.status(404).json({ error: err.message });
              });
          });
        }
      });
    } else {
      res.status(400).json({ error: "Password Length is Short" });
    }
  } else {
    res.status(400).json({ error: "Email Not Valid" });
  }
};

/////////------ User SignIn ----////////////////
exports.Signin = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        // console.log(password,user.password)
        bcryptjs
          .compare(password, user.password)
          .then((ifSame) => {
            //if user is normal user
            if (ifSame) {
              const token = jwt.sign(
                { secretId: user._id },
                process.env.JWT_SECRET
              );
              res.json({
                message: "SignSuccess",
                token: token,
                email: user.email,
                name: user.name,
                userId: user._id,
              });
            } else {
              res.status(400).json({ error: "Invalid password" });
            }
          })
          .catch((err) => {
            console.log("error in comparing password", err);
          });
      } else {
        res
          .status(404)
          .json({ error: "User not found of " + email + " address" });
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({ error: true, data: "Something went wrong", errMsg: err });
    });
};
exports.Result = (req, res) => {
  const { userId,marks } = req.body;
  UserPanel
    .findOneAndUpdate({ _id: userId },{result:marks})
    .then((user) => {
     res.json("Success")
    })
    .catch((err) => {
      res
        .status(404)
        .json({ error: true, data: "Something went wrong", errMsg: err });
    });
};
exports.getUSers = (req, res) => {

  UserPanel
    .find({result:{$exists:true}})
    .then((user) => {
     res.json({error:false,data:user})
    })
    .catch((err) => {
      res
        .status(404)
        .json({ error: true, data: "Something went wrong", errMsg: err });
    });
};
exports.Register = (req, res) => {

  let userDetails=req.body
  let newUser=new UserPanel({...userDetails}) 
  newUser.save()
  .then((user) => {
     res.json({error:false,data:user})
    })
    .catch((err) => {
      res
        .status(404)
        .json({ error: true, data: "Something went wrong", errMsg: err });
    });
};