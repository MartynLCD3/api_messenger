import {read_emails_format} from '../../models/emails/read_emails_format.js';
export const get_emails = (res) => {
  Promise.all([read_emails_format()]).then(objects => {
    let [emails] = objects;
    if(emails.length == 0) return res.status(200);
    let list = emails.reverse()
    res.status(200).json(list);
  });
}
