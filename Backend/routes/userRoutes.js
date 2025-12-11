import express from 'express'
import { addUsers, addUserslogin, deleteuser, edituser, listuser } from '../controllers/userController.js'

const router = express.Router()

router.post("/adduser",addUsers)
router.post("/addUserslogin",addUserslogin)
router.get("/listuser",listuser)
router.delete("/deleteuser/:id",deleteuser)
router.put("/edituser/:id",edituser)


export default router