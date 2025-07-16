import express from "express"
import { config } from "./routers/config.js";

const PORT = (3000);
const app = express(); 

app.use(express.json());
config(app)

app.listen(PORT,()=>{
    console.log('server running in ',{PORT});
    
})