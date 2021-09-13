import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes';
import newsRouter from './routes/newsRoutes';
import commentRouter from './routes/commentRoutes';
import topicRouter from './routes/topicRoutes';

import { config } from './config/configulation';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/api/v2', userRouter);
app.use('/api/v2', newsRouter);
app.use('/api/v2', commentRouter);
app.use('/api/v2', topicRouter);

app.use('/', (req, res) => { res.status(400).send({ status: 400, error: 'Incorrect route! try again' }); });

const { port } = config;

const server = app.listen(port, () => console.log(`listening to port ${port}....`));

export default server;
