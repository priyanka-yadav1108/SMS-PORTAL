import groupModel from "../models/groupModel.js";

async function getGroup(req, res) {
    try{
        let result = await groupModel.find();
        res.status(200).send({data:result})
    }catch(e){

    }
}

async function addGroup(req, res) {
    try{
        const groupExist = await groupModel.find({'name':req.body.name})
        if(groupExist.length > 0){
            res.status(200).send({message:'Group already exists'})
        }else{
            const instance = new groupModel(req.body);
            let result = await instance.save();
            res.status(200).send({message:'Group Added'})
        }

    }catch(e){
        res.status(401).send({error:e.message});
    }
}

export {
    getGroup,
    addGroup
}