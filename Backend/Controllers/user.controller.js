import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/AsyncHandler.js";
import { User } from "../Models/user.model.js";
import { Class } from "../Models/class.model.js";
import { Course } from "../Models/course.model.js";
import { Topic } from "../Models/topic.model.js";

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

const loginUser = asyncHandler(async (req, res) => {
    
    const { username, password } = req.body
    

    if (!username) {
       throw new ApiError(400, "username is required");
    }
 
    const user = await User.findOne({ username })
    
    // Validate password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        console.log(isPasswordValid);
        
       throw new ApiError(401, "Incorrect password");
    }
 
    // Generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
 
    // Retrieve logged-in user's details excluding sensitive fields
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
 
    // Set cookies for access and refresh tokens
    const options = {
       httpOnly: true,
       secure: true, // Consider making this conditional based on environment (e.g., secure for production only)
    };
 
    // console.log("user logged in");
    
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

 const getUserClass = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Assuming req.user contains the logged-in user details
    const user = await User.findById(userId).select('username');

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const classId = user.username.slice(0, 2); // Extracting the first two digits from username
    const userClass = await Class.findOne({ classId });

    if (!userClass) {
        throw new ApiError(404, "Class not found for the given ID");
    }

    return res.status(200).json(new ApiResponse(200, userClass, "Class retrieved successfully"));
});

const getUserCourses = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).select('username');

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const classId = user.username.slice(0, 2); // Extracting the class ID from the username
    const userClass = await Class.findOne({ classId }).populate('course'); // Populate courses within the class

    if (!userClass) {
        throw new ApiError(404, "Class not found");
    }

    return res.status(200).json(new ApiResponse(200, userClass.course, "Courses retrieved successfully"));
});

const getUserTopic = asyncHandler(async (req, res) => {
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate('topics');

    if (!course) {
        throw new ApiError(404, "Course not found");
    }

    return res.status(200).json(new ApiResponse(200, course.topics, "Topics retrieved successfully"));
});

const getTopic = asyncHandler(async (req, res) => {
    const { topicId } = req.params;

    const topic = await Topic.findById(topicId)
    if (!topic) {
        throw new ApiError(404, "Topic not found");
    }

    return res.status(200).json(new ApiResponse(200, topic ,"Topic retrieved successfully"));
});

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
    // console.log("user logged out");
    
    return res
       .status(200)
       .clearCookie("accessToken", options)
       .clearCookie("refreshToken", options)
       .json(new ApiResponse(200, {}, "User logged Out"))
 })

export {
    loginUser,
    getUserClass,
    getUserCourses,
    getUserTopic,
    logOutUser,
    getCurrentUser,
    getTopic
}