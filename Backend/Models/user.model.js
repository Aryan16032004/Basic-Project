import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

import mongoose from 'mongoose'

const { Schema } = mongoose;


const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: {
      type: String,
    },
    // class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
  });
  
  // Check password correctness
  userSchema.methods.isPasswordCorrect = async function (password) {

    return await bcrypt.compare(password, this.password);
  };

  userSchema.methods.generateAccessToken = function () {

    return jwt.sign(
      {
        _id: this._id,
        username: this.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
  };
  userSchema.methods.generateRefreshToken = function () {

    return jwt.sign(
      { _id: this._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
  };

export const User=mongoose.model("User",userSchema)



