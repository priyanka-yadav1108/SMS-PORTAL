import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message:  String,
    libraryId: String
})

const messageModel = mongoose.model('messages', messageSchema);

export default messageModel;