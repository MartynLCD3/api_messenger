import {update_admin_email} from '../../models/admin/update_admin_email.js';
import {read_email} from '../../models/admin/read_admin_email.js';
export const upd_admin_email = (req,res) => {
  let {new_email} = req.params;
  if(!new_email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) return res.status(404).json({msg:"error"});
  Promise.all([read_email()]).then(objects => {
    let [[admin_email]] = objects;
    let newEmail = {updateEmail:new_email};
      update_admin_email(admin_email,newEmail);
    });
  res.status(200).json({msg:"ok"});
}
