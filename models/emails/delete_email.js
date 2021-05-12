import {email} from './email_model.js';
export const delete_email = async (data) => {
    await email.deleteOne({"_id":data});
};
