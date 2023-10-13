const express = require('express');
const path = require('path');
const cors = require('cors');
const routerApp = require('./router/index');
const app = express();

const port = 5200;

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

app.use(cors());

routerApp(app);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('Server running!');
})