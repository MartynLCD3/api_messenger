import {adminEmail} from './admin_model.js';
export const update_admin_email = async (oldEmail,newEmail,res) => {
  let {admin_email} = oldEmail
  let {updateEmail} = newEmail
  await adminEmail.updateOne({"admin_email":admin_email},{$set:{admin_email:updateEmail}});
  res.status(200).json({msg:"ok"});
}
