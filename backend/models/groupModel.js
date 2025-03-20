import mongoose from "mongoose";

const Schema = mongoose.Schema;
const groupSchema = new Schema({
    name: String
})

const groupModel = mongoose.model('groups', groupSchema);

export default groupModel;