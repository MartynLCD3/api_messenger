import mongoose from 'mongoose';
const emailSchema = new mongoose.Schema({
  from_field: String,
  to_field: String,
  subject_field: String,
  message_field: String,
  date: String,
  hour: String
});
export const email = mongoose.model('emails',emailSchema);
