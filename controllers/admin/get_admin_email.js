import {read_email} from '../../models/admin/read_admin_email.js';
export const get_admin_email = (res) => {
  Promise.all([read_email()]).then(objects => {
    let [email] = objects;
    if(email.length == 0) return res.status(404).json({msg:0});
    res.status(200).json({msg:"ok"});
    return email;
  });
}
