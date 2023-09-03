const express = require('express')
const app = express()
const getUsers = (req,res)=>{

    return res.json({message:"Users Page"});
}



module.exports = getUsers;