import express from "express";
import multer from "multer";
import path from "path";
import { addproduct, delproduct, editproducts, listproducts, previewproducts } from "../controllers/productControllers.js";

const router = express.Router()

const storage = multer.diskStorage({
    destination : function (req,file,cb)
    {
        cb(null,"uploads/");
    },
    filename : function (req,file,cb)
    {
        cb(null,Date.now()+path.extname(file.originalname)) ;
    }
})

const upload = multer({
    storage:storage
})



router.post("/addproduct",upload.single("file"),addproduct);
router.get("/listproducts",listproducts)
router.put("/editproducts/:id",upload.single("file"),editproducts)
router.delete("/delproduct/:id",delproduct)
router.get("/previewproducts/:id",previewproducts)

export default router;