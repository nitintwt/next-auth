import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username:{
    type:stringify,
    required:[true , 'Please provide a username'],
    unique: true
  },
  email:{
    type: String,
    required: [true , 'Please provide an email'],
    unique: true
  },
  password :{
    type: String,
    required: [true , 'Please provide a password'],
  },
  isVerified :{
    type: Boolean,
    default: false
  },
  isAdmin :{
    type: Boolean,
    default: false
  },
  forgotPasswordToken : String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('users',userSchema)
/* Here, Next.js checks whether the model already exists.
If it does not, then it will create a new model.*/

export default User