import {read_email} from '../../models/admin/read_admin_email.js';
import {fields} from './fields.js';
export const email_control = (req,res) => {
  Promise.all([read_email()]).then(objects => {
    let [email] = objects;
    if(email.length == 0) return res.status(404).json({msg:0})
    let {admin_email} = email.pop();
    fields(admin_email,req,res);
  });
}
