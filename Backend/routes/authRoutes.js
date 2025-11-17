import express from 'express'
import { loginUser } from '../controllers/authControllers.js'

const router = express.Router()

router.post('/userlogin',loginUser)


export default router
