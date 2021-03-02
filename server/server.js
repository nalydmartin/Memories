
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/post.js';

const app = express();

// BodyParser for sending images to the database
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// Every route inside of the post routes is going to start with /posts in the url
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://dylan123:dylan123@cluster0.ki7sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    // Makes sure we don't get any warnings in the console
mongoose.set('useFindAndModify', false);

