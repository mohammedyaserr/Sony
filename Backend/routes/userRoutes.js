import express from 'express'
import { addUsers, listuser } from '../controllers/userController.js'

const router = express.Router()

router.post("/adduser",addUsers)
router.get("/listuser",listuser)


export default router