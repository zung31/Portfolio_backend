const express = require("express")
const app = express()
const port = 3000
const path = require('path')
const cors = require('cors');
const contactRouter = require('./routers/contact')
const allowedOrigins = [
    'http://localhost:4200',
    'https://portfolio-zung31s-projects.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/contact', contactRouter)

app.listen(port, () => console.log("Server Started"))