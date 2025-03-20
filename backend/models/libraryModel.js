import mongoose from "mongoose";
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    name: String
})

const libraryModel = mongoose.model('libraries', librarySchema);

export default libraryModel;
