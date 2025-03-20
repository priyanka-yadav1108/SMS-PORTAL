import twilio from 'twilio';
//const twilio = require("twilio");

const accountSid = 'ACada0810ea8a9b60aa297298ff268b4bf';
const authToken = '612cd5bcdc9c30579c597dc47ff48076';
const client = twilio(accountSid, authToken);

async function sendSms(req, res) {
    console.log(req.body);
    const message = await client.messages.create({
        body: req.body.message,
        from: "+18288071816",
        to: req.body.mobile,
    }); 

    res.send({message:'Message send successfully'})
}

export default sendSms;