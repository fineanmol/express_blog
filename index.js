const path = require('path')
const express = require("express");
const app = express();
const port = 3000;

// const anmolMiddleWare=(req,res,next)=>{
// console.log(req)
// next()
// }

//Public Folder
app.use(express.static(path.join(__dirname,"public")))
//app.use(anmolMiddleWare)

app.use('/',require('routes/blog'))



app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
