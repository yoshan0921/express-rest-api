import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors("*"));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true }));

app.use("/api/", routes);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "404",
    message: "Route not found"
  });
});

app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});