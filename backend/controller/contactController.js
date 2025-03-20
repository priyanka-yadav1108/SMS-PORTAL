import contactModel from "../models/contactModel.js";

async function getContact(req, res) {
    try{
        let contactResult = await contactModel.find();
        res.status(200).send({data:contactResult})
    }catch(e){
        res.status(401).send({error:e.message})
    }
}

async function getContactById(req, res) {
    try{
        let contactResult = await contactModel.find({groupId:req.params.groupId});
        res.status(200).send({data:contactResult})
    }catch(e){
        res.status(401).send({error:e.message})
    }
}

async function addContact(req, res) {
    try{        
        let instance = new contactModel(req.body);
        instance.save();
        res.status(200).send({message: 'Contact added'});
        
    }catch(e){
        res.status(401).send({error:e.message})
    }
}

export {
    getContact,
    getContactById,
    addContact
}