import db from '../config/db.js'

export const 
addproduct = ((req,res)=> {
    console.log(req.body);
    console.log(req.file);
    const {title} = req.body;

    const sql="INSERT INTO products (title, img) values (? , ? )";
    const values =[title,req.file.filename]

    db.query(sql ,values , (err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).json("failed")
        }else{
            res.status(200).json("success")
            
        }
    })

})