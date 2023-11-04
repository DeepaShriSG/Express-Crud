const express = require("express");
const AppRoutes = require('./src/routes/Coupon')
const UserRoute = require('./src/routes/User')

const app = express();
app.use(express.json());
app.use('/coupons',AppRoutes)
app.use('/user',UserRoute)



app.listen(8000, () => console.log("App is listening to port 8000"));
