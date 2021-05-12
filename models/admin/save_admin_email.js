import {adminEmail} from './admin_model.js';
export const save_admin_email = (data) => {
    const newAdminEmail = new adminEmail(data);
    newAdminEmail.save(err => {
        if(err) throw new Error(`Error: ${err}`);
    });
}
