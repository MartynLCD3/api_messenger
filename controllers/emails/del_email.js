import {delete_email} from '../../models/emails/delete_email.js';
export const del_email = (req,res) => {
  let {_id} = req.params;
  delete_email(_id,res);
}
