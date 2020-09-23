
const express    = require('express'),
  app        = express(),
  cors       = require('cors'),
  bodyParser = require('body-parser'),
  port       = 3000;


// Aqui pon la logica
app
  .use(cors({ 'origin': '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));


const r_login   = require('./app/routes/login');
const r_auth    = require('./app/modules/auth/r_auth');
const r_profile = require('./app/modules/profile/r_profile');

app
  .use('/login', r_login)
  .use('/profile', r_profile)
  .use('/auth', r_auth);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

