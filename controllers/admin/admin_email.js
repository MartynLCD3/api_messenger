import {save_admin_email} from '../../models/admin/save_admin_email.js';
export const admin_email = (req,res) => {
  let {admin_email} = req.body
  if(!admin_email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) return res.status(404).json({msg:"error"})
  save_admin_email(req.body);
  res.status(200).json({msg:"ok"});
}
