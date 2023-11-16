const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')
const AppRoutes = require('./src/routes')
dotenv.config()
const PORT = process.env.PORT

const app = express();


app.use(express.json());

app.use('/',AppRoutes)
app.use(cors())




app.listen(PORT, () => console.log(`App is listening to port ${PORT}`));
