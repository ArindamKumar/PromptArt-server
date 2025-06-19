import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT=process.env.PORT || 4000
const app=express()

app.use(express.json())
app.use(cors({
  origin: 'https://promptart-client.vercel.app/',
  credentials: true
}))
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req, res)=>res.send("API Working"))
app.post('/api/test',(req,res)=>{
	console.log("Test route hit")
	res.json({success: true, message: 'Test success'})
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
