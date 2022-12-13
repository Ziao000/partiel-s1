const express = require('express');
const app = express();
require('dotenv').config();
const connectMongo = require('./config/mongo');
const cors = require('cors')

const postRouter = require('./src/router/post.router');
const commentRouter = require('./src/router/comment.router');
const bookingRouter = require('./src/router/booking.router');

connectMongo();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/api', postRouter);
app.use('/api', commentRouter);
app.use('/api', bookingRouter);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
