import {email} from './email_model.js';
export const delete_email = async (data,res) => {
    await email.deleteOne({"_id":data});
    res.status(200).json({msg:"ok"});
};
