const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')
const AppRoutes = require('./src/routes')
dotenv.config()
const PORT = process.env.PORT

const app = express();
const corsOptions = {
    origin: ['http://localhost:5173', /\.onrender\.com$/],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",};
  app.use(cors(corsOptions));


app.use(express.json());

app.use('/',AppRoutes)





app.listen(PORT, () => console.log(`App is listening to port ${PORT}`));
