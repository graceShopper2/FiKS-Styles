const router = require('express').Router()


router.use('/users', require('./users'))
router.use("/products",require("./products"))
router.use("/order", require("./order"))
router.use("/cart" , require("./cart"))



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


module.exports = router;