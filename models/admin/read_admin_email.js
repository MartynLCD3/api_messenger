import {adminEmail} from './admin_model.js';
export const read_email = async () => {
    const admin_email = await adminEmail.find({},{_id:0,__v:0}, (err) => {
        if(err) throw new Error(`Error: ${err}`);
    }).lean();
    return admin_email;
};
