const { Schema, model } = require('mongoose')

const VideosSchema = new Schema(
  {
    description: {
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

module.exports = model('Users', VideosSchema)
