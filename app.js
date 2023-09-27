require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const router = require('./router/routes'); // Import your router

app.use(express.json());
app.use(cors());


app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
