const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure Web App running Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
