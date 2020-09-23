


const getPublications = (req, res) => {
  console.log('holaa');
  const hola = [{
    title: 'Hola esta es una publicacion',
    content: 'loremasda  dad wadmp waod awpod awmod kawopd',
    user_image: 'sadsad.jpg',
    user_names: 'Cristian Sotomayor G.',
    register_date: '22/09/2020'
  }];
  res.send(hola);
};



module.exports = {
  getPublications
};
