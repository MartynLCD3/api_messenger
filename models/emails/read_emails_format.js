import {email} from './email_model.js';
export const read_emails_format = async () => {
    const list_emails = await email.find({},{__v:0}, (err) => {
        if(err) throw new Error(`Error: ${err}`);
    }).lean();
    return list_emails;
};
