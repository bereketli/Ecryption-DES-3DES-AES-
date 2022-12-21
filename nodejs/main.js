const express = require("express")
const Encryption = require('node_triple_des')
const cors =require('cors')
const bodyparser = require('body-parser')
const app = express()
app.use(cors());
app.use(bodyparser.json())
var encrypt
var decrypt
function encript3AES(text,key){
    encrypt =  Encryption.encrypt('SharedKey', 'bereket Lingerew');
    
}
function decript3AES(cipher,key){
     decrypt =  Encryption.decrypt('SharedKey', encrypt);
    
}
app.post("/aes",(req,res)=>{
   encript3AES(req.text, req.key)
     

})
app.get("/aes",(req,res)=>{
    res.send(encrypt)
    
})
app.post("/aes/decript",(req,res)=>{
    decript3AES(req.cipher, req.key)
      console.log("america")
 
 })
 app.get("/aes/decript",(req,res)=>{
     console.log(decrypt)
     res.send(decrypt)
     
 })
 
app.listen(8000,()=>{
    console.log("the app is in port 8000")
})
