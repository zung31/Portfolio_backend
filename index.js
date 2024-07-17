const express = require("express")
const app = express()
const port = 3000
const inscriptionRouter = require("./routers/inscription")
const path = require('path')
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200/inscription-etranger',
};

app.use("/inscription", inscriptionRouter)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(port, () => console.log("Server Started"))