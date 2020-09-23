
const getProfileInfo = (req, res) => {
  console.log('holaa');
  const hola = {
    hola: 1,
    chau: 'holaaaaaaaaa'
  };
  res.send(hola);
};



module.exports = {
  getProfileInfo
};
