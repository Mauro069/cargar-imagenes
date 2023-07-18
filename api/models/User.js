import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  image: { type: String }
})

export const User = model('User', userSchema)
