// Entry point of the Application

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// This credential will be moved to .env file before the deployment
const CONNECTION_URL = 'mongodb://finna4:finna1234@nukecluster-shard-00-00.ws2ks.mongodb.net:27017,nukecluster-shard-00-01.ws2ks.mongodb.net:27017,nukecluster-shard-00-02.ws2ks.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mjthyn-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen
    (PORT, () => console.log(`Server running on PORT: ${PORT}`)))

  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);