import express from 'express';
import cors from 'cors';
import {connection} from './config/connection.js';
import {get_emails} from './controllers/emails/get_emails.js';
import {del_email} from './controllers/emails/del_email.js';
import {email_control} from './controllers/emails/email_control.js';
import {admin_email} from './controllers/admin/admin_email.js';
import {get_admin_email} from './controllers/admin/get_admin_email.js';
import {upd_admin_email} from './controllers/admin/upd_admin_email.js';

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

router.get('/',cors(),(req,res)=>{
  res.json({status:"ok"});
});

router.get('/get_emails',cors(),(req,res)=>{
  get_emails(res);
});

router.post('/new_email',cors(),(req,res)=>{
  email_control(req,res);
});

router.delete('/:_id',cors(),(req,res)=>{
  del_email(req,res);
});

router.get('/get_admin_email',cors(),(req,res)=>{
    get_admin_email(res);
});

router.post('/new_admin_email',cors(),(req,res)=>{
  admin_email(req,res);
});

router.put('/:new_email',cors(),(req,res)=>{
  upd_admin_email(req,res);
})

app.use('/api',router);

app.get('*',(req,res) => {
    res.status(404).json({error:"página no encontrada"});
})

const port = process.env.PORT || 3001;
app.set('PORT',port);
const server = app.listen(app.get('PORT'), () => console.log(`Servidor iniciado en el puerto ${server.address().port}`));
server.on('error', error => console.log(`Message: ${error}`));
