import messageModel from "../models/messageModel.js";

async function getMessage(req, res) {
    let result = await messageModel.find();
    res.status(200).send({data: result});
}

async function getMessageById(req, res) {
    let result = await messageModel.find({libraryId:req.params.libraryId});
    res.status(200).send({data: result});
}

async function addMessage(req, res) {
    let instance = new messageModel(req.body);
    instance.save()
    res.status(200).send({message:'Message Added'});
}

export {
    getMessage,
    getMessageById,
    addMessage
}