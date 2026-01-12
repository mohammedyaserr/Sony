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


// ------------ Edit products ------------

export const editproducts = ((req,res)=>{
    const productid = req.params.id;

    const  {title, img, description, qnty, brand} = req.body;

    const sql = "UPDATE products SET title = ?, img=?, description=?, qnty=?, brand=? WHERE id=?";
    const values = [title, img, description, qnty, brand, productid];

    db.query(sql, values, (error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).json("Edit Failed")
        } else {
            console.log("Edit works successfully");
            res.status(200).json(" edit Success")
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


// ------------ preview selected products from ------------

export const previewproducts = ((req,res)=>{
    const prevprtdid = req.params.id;
    const sql = "SELECT * FROM products WHERE id = ?"

    db.query(sql, [prevprtdid], (err,result)=>{
        if(err){
            res.status(500).json("server error")
            console.log(err);
            
        } else {
            res.status(200).json(result[0])
            console.log(result);
            
        }
    })
})


// ------------ add products to cart ------------

export const addtocart = ((req,res) =>{
    
    const {img, title, brand, size, price, description} = req.body;

    const sql = "INSERT INTO cart (title, price, img, size, brand, description ) values (?, ?, ?, ?, ?, ?)"

    const values = [title, price, img, size, brand, description]

    db.query(sql,values,(error,result)=>{
        if (error) {
            res.status(500).json(error)
            console.log(error);
            
        } else {
            res.status(200).json("product added to cart")
        }
    })


})



// ------------ list products in cart ------------

export const listcartitems = ((req,res) => {
    
    db.query("SELECT * FROM cart" , (error,result)=>{
        if (error) {
            res.status(500).json("interal error")
            console.log(error);
            
        } else {
            res.status(200).json(result,"successfully fetched")
        }
    })
})
