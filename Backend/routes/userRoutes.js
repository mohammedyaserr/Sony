import express from 'express'
import { addUsers, deleteuser, listuser } from '../controllers/userController.js'

const router = express.Router()

router.post("/adduser",addUsers)
router.get("/listuser",listuser)
router.delete("/deleteuser/:id",deleteuser)


export default router