import db from '../config/db.js'


// ------------------------ add user to db ------------------------

export const addUsers = ((req,res) => {
    const {name, email, num, pass, usertype} = req.body;

    const values = [name, email, num, pass, usertype];
        console.log(values,"values");
        
    const sql = "INSERT INTO users (name, email, num, pass, usertype) values (?,?,?,?,?)";

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



// ------------------------ edited user data to table  ------------------------


// export const  edituser = ((req,res) =>{
//     const value 
//     if (error) {
//         console.log(error);
//         res.status(500).json("server error")
//     } else {
        
//     }
// })


// ------------------------ delete from db ------------------------


export const deleteuser = ((req,res)=>{
    const userid = req.params.id;
    const sql = "DELETE FROM users WHERE idusers = ?"

    db.query(sql,userid,(error , result) =>{
        
        if (error) {
            res.status(500).json("server error")
            console.log(error);
        }else{
            res.status(200).json("deleted user")
            console.log("del success");
        }
    })
})