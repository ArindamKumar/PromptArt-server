import express from 'express'
import {registerUser, loginUser, userCredits,paymentRazorpay,verifyRazorpay} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter=express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth, userCredits) 
/* IMPORTANT !!
If you are using post method with '/credits' endpoint,
then use post method for making an axios request to the API
in the AppContext file.
*/

userRouter.post('/pay-razor',userAuth, paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
// http://localhost:4000/api/user/credits