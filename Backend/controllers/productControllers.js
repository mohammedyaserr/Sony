import db from '../config/db.js'



// ------------ add products to db ------------

export const addproduct = ((req,res)=> {
    
    
    const {title, description, qnty, brand, catogery, price} = req.body;
    console.log(req.body);
    
    
    const sql="INSERT INTO products (title, img, description, qnty, brand, catogery, price) values (?, ?, ?, ?, ?, ?, ?)";
    const values =[title, req.file.filename, description, qnty, brand, catogery, price]
    
    db.query(sql ,values , (err,result)=>{
        if (err) {
            // console.log(err);
            // res.status(500).json("failed")
            console.log("Failed Request Body:", req.body);
            console.log("Failed Query Values:", values); 
            res.status(500).json("failed")
        }else{
            res.status(200).json("success")
            
        }
    })

});



// ------------ fetch products from db ------------

export const listproducts = ((req,res)=>{
    // const sql = "SELECT * FROM products"

    db.query("SELECT * FROM products",(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).json("server error")
        } else {
            console.log("Success");
            res.status(200).json(result)
        }
    })
})


// ------------ del products from db ------------

export const delproduct = ((req,res)=>{
    const productid = req.params.id;
    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql,productid, (error,result) => {
        if (error) {
            console.log(error);
            res.status(500).json("server error")
        } else {
            res.status(200).json("success")
            console.log("Product was deleted");

            
        }
    })
})