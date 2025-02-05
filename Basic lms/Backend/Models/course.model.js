import mongoose from "mongoose";
const {Schema} = mongoose 

const courseSchema = new Schema(
    {
      courseName: { type: String, required: true },
      topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
    },
    { timestamps: true }
  );

  export const Course = mongoose.model('Course', courseSchema);