$(function () {

  let currentIndex = 0;
  let plusThumbnails = 5;
  let images = [
    {
      photo: 'pics/araucana.jpg',
      title: 'Monkey Puzzle Tree (Araucaria arauca)',
      description: ' is an evergreen tree growing to 1–1.5 m (3–5 ft) in diameter and 30–40 m (100–130 ft) in height. It is native to central and southern Chile and western Argentina.'
    },
    {
      photo: 'pics/bee-eaters.jpg',
      title: 'European bee-eater (Merops apiaster)',
      description: 'is a near passerine bird in the bee-eater family, Meropidae. It breeds in southern Europe and in parts of north Africa and western Asia.'
    },
    {
      photo: 'pics/chickens.jpg',
      title: 'Chicken (Gallus gallus domesticus)',
      description: 'is a subspecies of the red junglefowl, is a type of domesticated fowl, originally from Asia.'
    },
    {
      photo: 'pics/crocus.jpg',
      title: 'Crocus (Crocus sativus)',
      description: ' is a genus of flowering plants in the iris family comprising 90 species of perennials growing from corms.'
    },
    {
      photo: 'pics/liverwort.jpg',
      title: 'Liverwort (Hepatica transsilvanica)',
      description: 'is a genus of herbaceous perennials in the buttercup family, native to central and northern Europe, Asia and eastern North America.'
    },
    {
      photo: 'pics/lynx.jpg',
      title: 'Eurasian lynx (Lynx lynx)',
      description: 'is a medium-sized wild cat native to Northern, Central and Eastern Europe to Central Asia and Siberia, the Tibetan Plateau and the Himalayas.'
    },
    {
      photo: 'pics/martes.jpg',
      title: 'Pine marten (Martes martes)',
      description: 'is a mustelid native to and widespread in Northern Europe.'
    },
    {
      photo: 'pics/oudemansiella.jpg',
      title: 'Porcelain fungus (Oudemansiella mucida)',
      description: 'is a basidiomycete fungus of the family Physalacriaceae and native to Europe.'
    },
    {
      photo: 'pics/pike.jpg',
      title: 'Northern pike (Esox lucius)',
      description: 'are typical of brackish and fresh waters of the Northern Hemisphere (i.e. holarctic in distribution).'
    },
    {
      photo: 'pics/rosalia.jpg',
      title: 'Rosalia longicorn (Rosalia alpina)',
      description: 'is a large longicorn (family Cerambycidae) that is distinguished by its distinctive markings.'
    },
    {
      photo: 'pics/salamander.jpg',
      title: 'Salamanders (Cryptobranchoidea Salamandroidea)',
      description: 'are a group of amphibians typically characterized by a lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larvae and adults.'
    },
    {
      photo: 'pics/yew.jpg',
      title: 'Yew (Taxus baccata)',
      description: 'is a species of evergreen tree in the conifer family, native to western, central and southern Europe, northwest Africa, northern Iran and southwest Asia.'
    }
  ];

  let loadImage = (index) => {
    $('#photo').attr('src', images[index].photo);
    $('#photo-title').html(images[index].title);
    $('#photo-description').html(images[index].description);
    $(`[data-index="${index}"]`).css('border-width', '5px');
  };

  let loadThumbnails = (minIndex = 0, maxIndex = images.length) => {
    $('#thumbnails').html("");
    for (let i = minIndex; i < maxIndex; i++ ) {
      let index = i;
      while (index < 0) {index += images.length;}
      index = index % images.length;
      $('#thumbnails').append(`<div class="thumbnails" data-index="${index}"><img src="${images[index].photo}" alt="${images[index].title}" title="${images[index].title}"></div>`);
      $('.thumbnails:last-of-type').click(() => {loadNext(index-currentIndex);});
    }
  }
  
  let loadNext = (n = 1) => {
    currentIndex = (currentIndex + n) % images.length;
    while (currentIndex < 0) {currentIndex += images.length;}
    loadThumbnails(0, images.length);
    /*
    loadThumbnails(currentIndex - plusThumbnails, currentIndex + plusThumbnails + 1);
    */
    loadImage(currentIndex);
  }

  $('#la').click(() => { loadNext(-1);})

  $('#ra').click(() => { loadNext(1);})

  loadThumbnails(0, images.length);
  loadImage(currentIndex);
});