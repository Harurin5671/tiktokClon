const { Router } = require('express')
const router = Router()

router.get('/prueba', (req, res) => {
  res.send('hola')
})

module.exports = router
