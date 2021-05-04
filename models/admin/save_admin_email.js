import {adminEmail} from './admin_model.js';
export const save_admin_email = (data,res) => {
    const newAdminEmail = new adminEmail(data);
    newAdminEmail.save(err => {
        if(err) throw new Error(`Error: ${err}`);
        res.status(200).json({msg:"ok"});
    });
}
