const { Router } = require('express')
const routes = require('./routes.js')
const router = Router()

router.use('/', routes)

module.exports = router
