const expess = require("express");
const bodyParser = require("body-Parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true } ));

app.get("/",function(req,res){
  res.sendFle(__dirname+"/index.html");
 });

 app.post("/",function(req,res){
   var a = Number(req.body.num1);
   var b = Number(req.body.num2);
   var result = a*b;
   res.send("THE ANSWER IS "+ result);
  } );

app.listen(3000, function(){
    console.log("The server has started on prt 3000");
});
