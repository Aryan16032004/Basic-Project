import mongoose from "mongoose";
const {Schema} = mongoose 

const topicSchema = new Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      content: { type: String, required: true },
      videoLink: { type: String, required: true },
      iframe: { type: String, required: true }
    },
    { timestamps: true }
  );

  export const Topic = mongoose.model('Topic', topicSchema);