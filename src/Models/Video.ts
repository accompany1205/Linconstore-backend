import mongoose, { Schema } from "mongoose";

export interface IVideo extends mongoose.Document {
  url: string;
}

const videoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model<IVideo>("Video", videoSchema);

export default Video;