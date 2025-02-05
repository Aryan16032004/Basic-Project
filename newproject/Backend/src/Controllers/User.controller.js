import { ApiError } from "../Utils/ApiError.js";
import { asyncHandler } from "../Utils/AsyncHandler.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { User } from "../Models/UserModel.js";
import mongoose from 'mongoose';

const generateAccessAndRefreshToken = async (userId) => {
    try {
       const user = await User.findById(userId);
 
       if (!user) {
          throw new ApiError(404, "User not found");
       }
 
       const accessToken = user.generateAccessToken()
       const refreshToken = user.generateRefreshToken()
 
 
       user.refreshToken = refreshToken
       await user.save({ validateBeforeSave: false })
 
       return { accessToken, refreshToken }
 
    } catch (error) {
       throw new ApiError(500, "Unable to generate access and refresh token")
    }
 }

const registerUser = asyncHandler(async (req, res) => {

    const { fullname, username, email, password } = req.body 
    if (
       [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
       throw new ApiError(400, "All fields are required")
    }
 
    const existedUser = await User.findOne({
       $or: [{ username }, { email }]
    })
 
    if (existedUser) {
       throw new ApiError(409, "User already existed")
    }

 
    const user = await User.create({
       fullname,
       email,
       password,
       username: username.toLowerCase()
    })
 
    const createdUserId = await User.findById(user._id).select(
       "-password -refreshToken"
    )
 
    if (!createdUserId) {
       throw new ApiError(500, "Something went wrong while creating the user ")
    }
 
    return res.status(201).json(
       new ApiResponse(200, createdUserId, "User registerd succesfully")
    )
 
 });

 const loginUser = asyncHandler(async (req, res) => {
    
    const { email, password } = req.body
   //  console.log(req.body);
    

    if (!email) {
       throw new ApiError(400, "email is required");
    }
 
    const user = await User.findOne({ email })

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
       throw new ApiError(401, "Incorrect password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
 
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
 

    const options = {
       httpOnly: true,
       secure: true, 
    };
 
    
    return res
       .status(200)
       .cookie("accessToken", accessToken, options)
       .cookie("refreshToken", refreshToken, options)
       .json(
          new ApiResponse(200, {
             user: loggedInUser,
             accessToken,
             refreshToken,
          }, "User logged in successfully")
       );
 });

 const getCurrentUser = asyncHandler(async(req,res)=>{
   return res.status(200)
   .json(new ApiResponse(200,req.user,"current user fetched successfully"))
})

 const logOutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
       req.user._id,
       {
          $set: {
             refreshToken: undefined
          }
       }, {
       new: true
    }
    )
 
    const options = {
       httpOnly: true,
       secure: true
    }
    
    return res
       .status(200)
       .clearCookie("accessToken", options)
       .clearCookie("refreshToken", options)
       .json(new ApiResponse(200, {}, "User logged Out"))
 })

 export {registerUser,
    loginUser,
    logOutUser,
    getCurrentUser,
    
}