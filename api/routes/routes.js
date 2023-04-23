const { Router } = require('express')
const Users = require('../models/Users.js')
const router = Router()

router.get('/prueba', async (req, res) => {
  try {
    const { username } = req.body
    const newUser = new Users({
      username
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
