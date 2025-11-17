import express from 'express'
import { addUsers } from '../controllers/userController.js'

const router = express.Router()

router.post("/adduser",addUsers)


export default router