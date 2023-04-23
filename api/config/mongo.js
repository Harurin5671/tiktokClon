const mongoose = require('mongoose')

const dbConnect = () => {
  const DB_URI = process.env.DB_URI
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error(error))
}

module.exports = dbConnect
