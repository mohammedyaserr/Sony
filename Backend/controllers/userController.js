import db from '../config/db.js'


// ------------------------ add user to db ------------------------

export const addUsers = ((req,res) => {
    const {name, email, num, pass} = req.body;

    const values = [name, email, num, pass, usertype];
        console.log(values,"values");
        
    const sql = "INSERT INTO users (name, email, pass, num) values (?,?,?)";

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



// ------------------------ get users from db ------------------------


export const listuser = ((req,res)=>{
    
    db.query("SELECT * FROM users",(error,result) => {
        if(error) {
            console.log(error);
            res.status(500).json("server error")
        }else{
            res.status(200).json(result,"success")
            // console.log(result);           
        }
    })
})