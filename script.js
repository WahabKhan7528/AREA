  const images = [
    'images/bigpicture1.avif',
    'images/bigpicture2.avif',
    'images/bigpicture3.avif'
  ];
  let current = 0;
  const sliderImage = document.getElementById('slider-image');
  document.getElementById('prev-btn').onclick = function() {
    current = (current - 1 + images.length) % images.length;
    sliderImage.src = images[current];
  };
  document.getElementById('next-btn').onclick = function() {
    current = (current + 1) % images.length;
    sliderImage.src = images[current];
  };
