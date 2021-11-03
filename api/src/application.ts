import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import cors from 'cors';
import router from './api';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Static folder
app.use(express.static(path.join(__dirname, config.clientBuildDir)));

app.use('/api', router);

// Serving Client
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, config.clientBuildDir, 'index.html'));
});

export default app;