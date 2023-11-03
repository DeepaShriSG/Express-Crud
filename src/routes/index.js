const express = require('express')
const router = express.Router()


const CouponsRoutes = require('./Coupon')

router.use('/coupons',CouponsRoutes)

module.exports = router

