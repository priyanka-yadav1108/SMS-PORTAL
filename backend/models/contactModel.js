import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;
const contactSchema = new Schema({
    name: String,
    mobile: Number,
    email: String,
    groupId: String
})

const contactModel = mongoose.model('contacts', contactSchema);

export default contactModel;