const express = require("express");
const app = express();


app.use(express.static("public"))

app.listen(process.env.PORT || 3000, function(){
    console.log("servidor corriendo ");
})

app.get("/" , (req, res)=> {
    res.sendFile(__dirname + "/views/home.html" )
})