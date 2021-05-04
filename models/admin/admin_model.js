import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema({
  admin_email: String,
});
export const adminEmail = mongoose.model('admin',adminSchema);
