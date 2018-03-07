import express from "express"
import {port} from "./config"

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({name: "Sarah Gregory", children: [{name: "Lukas"}, {name: "Lucy"}]})
})

app.listen(port())