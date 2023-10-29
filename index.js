const express=require('express')
const app=express();
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db')
const cors=require('cors')
const formidable=require('express-formidable')


dotenv.config();

connectDB();

const PORT =5500;


app.use(cors());
app.use(express.json());
app.use(morgan('dev')) 
app.use(formidable());



app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
  