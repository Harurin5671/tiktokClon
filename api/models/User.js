const { Schema, model } = require('mongoose')

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Users', UsersSchema)
