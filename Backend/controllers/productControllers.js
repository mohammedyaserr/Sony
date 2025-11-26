import db from '../config/db.js'

export const addproduct = ((req,res)=> {
    console.log(req.body);
    console.log(req.file);
    const {title, img} = req.body;
    const sql="INSERT INTO products (title, img) values (? , ? )";
    

})