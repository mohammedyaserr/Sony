import express from 'express';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';



const app = express ()

app.use(express.json())

app.use(cors())

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)



const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use('/api/uploads',express.static(path.join(_dirname, 'uploads')))



const port = 8080;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
    
})

