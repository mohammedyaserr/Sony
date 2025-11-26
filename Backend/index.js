import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express ()

app.use(express.json())

app.use(cors())

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)


const port = 8080;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
    
})

