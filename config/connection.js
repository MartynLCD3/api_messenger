import mongoose from 'mongoose';
export const connection = (() => mongoose.connect('mongodb://localhost/baseMessenger', {
  useNewUrlParser:true,
  useUnifiedTopology:true
}, err => {
    if(err) throw new Error(`Error: ${err}`)
    console.log('Base de datos conectada');
}))();
