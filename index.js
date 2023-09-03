const express = require('express');
const app = express();
const mysql = require('mysql2');
const userPage = require('./src/modules/users/user.router.js')
app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'node'
});

app.use(userPage);

// app.post('/addUsers',(req,res)=>{
//     const {name,email} = req.body;

//     const sql = `INSERT INTO users(name,email) VALUES('${name}','${email}')`;
//     connection.execute(sql,(error,result)=>{
//         if (error){
//             return res.json({message:"error:",error});
//         }else{
//             return res.json({message:"success",result,name});
//         }
//     });     

    


    
// })  



// app.get('/readUsers', (req,res)=>{
//     const sql = `SELECT * FROM users`
//     connection.execute(sql,(err,result)=>{
//         if(err){
//             return res.json({message:"error",err});
//         }else {
//             return res.json({message:"success",result})
//         }
//     })
// })

// //update 


// app.patch('/users/:id', (req,res)=>{

//     const {id} = req.params;
//     const {email} = req.body;
    
//     const sql = `update users SET email='${email}' WHERE id='${id}'`
//     connection.execute(sql,(err,result)=>{
//         if(err){
//             return res.json({message:"error",err})
//         }
//         if(result.affectedRows){
//             return res.json({message:"success",result})
//         }

//         return res.json({message:"invalid user id "})
       
//     });
    
// })


// app.delete('/users', (req,res)=>{


//     const {id} = req.query

//     const sql = `DELETE FROM users WHERE id='${id}'`

//     connection.execute(sql,(err,result)=>{
//         if(err){
//             return res.json({message:"error",err})
//         }
//         if(result.affectedRows){

//             return res.json({message:"success",result})
//         }

//         return res.json({message:"there's no user to delete"})
//     })
// })



// app.post('/blog',(req,res)=>{

//     const{title,description,user_id} = req.body;
//     const sql = `INSERT INTO blogs(title,description,user_id) VALUES('${title}','${description}','${user_id}')`
//     connection.execute(sql,(err,result)=>{
//         if(err){
//             return res.json({message:"error",err})
//         }
//         else return res.json({message:"success"});
//     })
    
// })


// app.get('/blog',(req,res)=>{
//     const sql = `SELECT users.name as userName, blogs.title as blogName FROM blogs RIGHT JOIN users ON users.id=blogs.user_id`;
//     connection.execute(sql,(err,result)=>{
//         if(err){
//             return res.json({message:'Error',err})
//         }
//         return res.json({message:"success",result})
//     })
// })







// app.get('/',(req,res)=>{
//     return res.json({message:"hello"});n
// })


app.listen(3000,()=>{
    console.log(`server is running`);
})