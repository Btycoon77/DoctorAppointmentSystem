const express = require('express');
const morgan = require('morgan');
const  connectDb  = require('./config/connectDb');
const userRouter = require('./routes/userRoutes');
const dotenv = require('dotenv').config();
const cors = require('cors');
const adminRouter = require('./routes/adminRoute');
const doctorRouter = require('./routes/doctorRoute');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
//  connect database;
connectDb();

// routes

app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/doctor',doctorRouter);

app.listen(port,()=>{
    console.log(`server running at port ${port} in ${process.env.NODE_MODE} mode`);

})