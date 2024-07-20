import express from 'express';
import { config } from 'dotenv';
import { translate } from './handlers/translate';

config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('API KEY: ', apiKey);
  res.send('Hello, TypeScript + Node.js + Express!');
});

app.post('/translate', translate);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
