import db from '../config/db.js'

export const addUsers = ((req,res) => {
    const {name, num, pass} = req.body;

    const values = [name, pass,num];
        console.log(values,"values");
        
    const sql = "INSERT INTO users (name, pass, num) values (?,?,?)";

    db.query(sql, values , (error,result) => {
        if (error) {
            console.log(error);
            res.status(500).json("server error")
            
        }else {
            // console.log(result);
            res.status(200).json("success")
            
        }
    })
})


export const deluser = ((req,res)=>{
    
})