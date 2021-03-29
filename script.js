$(function () {

  let currentIndex = 0;
  let images = [
    {
      photo: 'pics/lynx.jpg',
      title: 'Hiúz (Lynx lynx)',
      description: 'What here, why is this a very nice image'
    },
    {
      photo: 'pics/bee-eater.jpg',
      title: 'Gyurgyalag (Merops apiaster)',
      description: 'What happened here, why is this a very nice image'
    },
    {
      photo: 'pics/martes.jpg',
      title: 'Nyérc (Martes martes)',
      description: 'What happened here, why is this a very nice image'
    }
  ];


  let loadImage = (index) => {
    $('#photo').attr('src', images[index].photo);
    $('#photo-title').html(images[index].title);
    $('#photo-description').html(images[index].description);
  };

  loadImage(currentIndex);

















});