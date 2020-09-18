
const express    = require('express');
const app        = express();
const cors       = require('cors');
const bodyParser = require('body-parser')
const port       = 3000;


// Aqui pon la logica
app
  .use(cors({ 'origin': '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }))


const r_login = require('./app/routes/login');
const r_auth = require('./app/modules/auth/r_auth');
app
  .use(`/login`, r_login)
  .use(`/auth`, r_auth);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

