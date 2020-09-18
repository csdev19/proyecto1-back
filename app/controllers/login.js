// Experimento

function authLogin(req, res) {
  console.log('holaa')
  res.send('Birds home page');
}

function hola(req, res) {
  console.log('holaa')
  const hola = {
    hola: 1,
    chau: 'holaaaaaaaaa'
  }
  res.send(hola);
}

module.exports = {
  authLogin,
  hola
}