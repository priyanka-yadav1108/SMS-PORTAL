import libraryModel from "../models/libraryModel.js";

async function getLibrary(req, res) {
    try{
        let result = await libraryModel.find();
        res.status(200).send({data:result});
    }catch(e){
        res.status(401).send({error:e.message})
    }
}

async function addLibrary(req, res) {
    try{
        const libraryExist = await libraryModel.find({'name':req.body.name});
        if(libraryExist.length > 0){
            res.status(200).send({message:'Library already exists'})
        }else{
            const instance = new libraryModel(req.body);
            let result = await instance.save();
            res.status(200).send({message:'Library Added'})
        }
        

    }catch(e){
        res.status(401).send({error:e.message})
    }
    
}

export {
    getLibrary,
    addLibrary
}