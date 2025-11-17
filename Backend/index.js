import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express ()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection(
    {
        host:"",
        user:"",
        password:"",
        database:"",
    }
)