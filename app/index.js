const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`appid: home ${appid}`))

app.get("/app1", (req,res) => 
res.send(`appid: app1 ${appid}`))
 
app.get("/app2", (req,res) => 
res.send(`appid: app2 ${appid}`))
 
app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))
