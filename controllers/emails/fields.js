import {send_email} from './email_config.js';
export const fields = (admin,req,res) => {
    let {to_field,subject_field,message_field} = req.body;
        if(to_field.length == 0 || subject_field.length == 0 || message_field.length == 0 || !to_field.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) return res.status(404).json({msg:"error"});
         let date = new Date().toDateString();
         let hour = new Date().getHours();
         let minutes = new Date().getMinutes();
         let fullHour;
         hour < 12 ? fullHour = `${hour}:${minutes} am` : fullHour = `${hour}:${minutes} pm`
         let email_format = {
		 from_field:admin,
		 to_field:to_field,
		 subject_field:subject_field,
		 message_field:message_field,
		 date:date,hour:fullHour
	 }
         send_email(email_format);
         return res.status(200).json({msg:"ok"});       
}
