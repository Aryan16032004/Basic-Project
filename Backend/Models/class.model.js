import mongoose from "mongoose";
const {Schema} = mongoose 

const classSchema = new Schema(
    {
      className: { type: String, required: true },
      course: [{ type: Schema.Types.ObjectId, ref: 'Course', required: true }],
      classId: { type: String, required: true, unique: true }
    },
    { timestamps: true }
  );

  export const Class = mongoose.model('Class', classSchema);