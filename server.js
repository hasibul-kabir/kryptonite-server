const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnect } = require('./db/dbConnection');
const userRouter = require('./routes/userRouter');

//db connection
dbConnect();

//middlewares
const app = express();
app.use(cors());
app.use(express.json());
//router middlewares
app.use('/kryptonite', userRouter);
app.get('/', (req, res) => {
    res.send('Kryptonite');
})



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})