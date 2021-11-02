import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2 ,3]);
  console.log('123');
});

app.listen(port, () => console.log(`listening on port ${port}...`));