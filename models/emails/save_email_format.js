import {email} from './email_model.js';
export const save_email_format = (data,res) => {
    const newEmail = new email(data);
    newEmail.save(err => {
        if(err) throw new Error(`Error: ${err}`);
        res.status(200).json({msg:"ok"});
    });
}
