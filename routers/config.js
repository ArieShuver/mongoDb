import router from "./router.js";

export function config(app){
    app.use("/users",router) 
    app.use("/",(req,res)=>{
        res.json("error: not found")
    })
}