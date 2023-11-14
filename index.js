const express = require("express");

const dotenv = require('dotenv')
const AppRoutes = require('./src/routes')
dotenv.config()
const PORT = process.env.PORT

const app = express();


app.use(express.json());

app.use('/',AppRoutes)




app.listen(PORT, () => console.log(`App is listening to port ${PORT}`));
