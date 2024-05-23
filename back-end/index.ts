import "reflect-metadata";
import express from "express";
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Servidor aberto no link: http://localhost:${port}`)
});