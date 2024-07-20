import express from 'express';
import { config } from 'dotenv';
import { translate } from './handlers/translate';
import cors from 'cors';
import bodyParser from 'body-parser';

config();

const app = express();
const port = process.env.PORT || 4000;
const apiKey = process.env.OPENAI_API_KEY;

app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/', (req, res) => {
  console.log('API KEY: ', apiKey);
  res.send('Hello, TypeScript + Node.js + Express!');
});

app.post('/translate', translate);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
