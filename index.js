const express = require('express');



const app = express()

// function rootCall(req , res){
//     res.send("Thank YOu ")
// }
/* const rootCall = (req , res) =>res.send("Thank You vary much"); */


app.get('/' , (req , res) =>{
    res.send("I know how to start node ...!!!YAY")
}); 




app.listen(5000 , ()=>console.log("listing to port 5000"))