const { Schema, model } = require('mongoose')

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Users', UsersSchema)
