$(function () {

  let images = [];
  let currentIndex = 0;
  let thumbnailsCount = $('#thumbnails').css('--thumbnails-count') || -1;
  
  $(window).resize(function() {
    thumbnailsCount = $('#thumbnails').css('--thumbnails-count') || -1;
    loadThumbnails(thumbnailsCount);
  });

  readTextFile = function(file, callback) {
    var dataFile = new XMLHttpRequest();
    dataFile.overrideMimeType("application/json");
    dataFile.open("GET", file, true);
    dataFile.onreadystatechange = function() {
      if (dataFile.readyState === 4 && dataFile.status == "200") {
        callback(dataFile.responseText);
      }
    } 
    dataFile.send(null);
  }

  readTextFile("images.json", (data) => {
    images = JSON.parse(data);

    loadThumbnails(thumbnailsCount);
    loadImage(currentIndex);
    });

  let loadImage = (index) => {
    $('#photo-s').attr('src', images[index].photos);
    $('#photo').attr('srcset', images[index].photo);
    $('#photo-m').attr('srcset', images[index].photom);
    $('#photo-l').attr('srcset', images[index].photol);
    $('#photo-title').html(images[index].title);
    $('#photo-title').attr('title',images[index].title);
    $('#photo-description').html(images[index].description);
    $('#photo-description').attr('title',images[index].description);
    $(`[data-index="${index}"]`).css('border-width', '5px');
  };

  let loadThumbnails = (thumbnailsCount) => {
    let minIndex, maxIndex;
    if (thumbnailsCount < 0) {
      minIndex = 0;
      maxIndex = images.length;
    } else {
      minIndex = currentIndex - Math.trunc(thumbnailsCount / 2);
      maxIndex = currentIndex + Math.trunc(thumbnailsCount / 2) +1;
    }
    $('#thumbnails').html("");
    for (let i = minIndex; i < maxIndex; i++ ) {
      let index = i;
      while (index < 0) {index += images.length;}
      index = index % images.length;
      $('#thumbnails').append(`<div class="thumbnails" data-index="${index}"><img src="${images[index].phototh}" alt="${images[index].title}" title="${images[index].title}"></div>`);
      $('.thumbnails:last-of-type').click(() => {loadNext(index-currentIndex);});
    }
  }
  
  let loadNext = (n = 1) => {
    currentIndex = (currentIndex + n) % images.length;
    while (currentIndex < 0) {currentIndex += images.length;}
    loadThumbnails(thumbnailsCount);
    loadImage(currentIndex);
  }

  $('#la').click(() => { loadNext(-1);})
  $('#ra').click(() => { loadNext(1);})

  $('#slider').on("swipeleft", () => {loadNext(-1)})
  $('#slider').on("swiperight", () => {loadNext(1)})

});