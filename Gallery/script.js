
let currentImageIndex = 0;
const images = [
  { src: 'images/image1.jpg', caption: 'Beautiful Scenery 1' },
  { src: 'images/image2.jpg', caption: 'Beautiful Scenery 2' },
  { src: 'images/image3.jpg', caption: 'Beautiful Scenery 3' },
  { src: 'images/image4.jpg', caption: 'Beautiful Scenery 4' },
  { src: 'images/image5.jpg', caption: 'Beautiful Scenery 5' },
  { src: 'images/image6.jpg', caption: 'Beautiful Scenery 6' },
  { src: 'images/image7.jpg', caption: 'Beautiful Scenery 7' },
  { src: 'images/image8.jpg', caption: 'Beautiful Scenery 8' },
  { src: 'images/image9.jpg', caption: 'Beautiful Scenery 9' },
  { src: 'images/image10.jpg', caption: 'Beautiful Scenery 10' }
];

function changeImage(src, caption) {
  document.getElementById('mainImage').src = src;
  document.getElementById('imageCaption').textContent = caption;
  currentImageIndex = images.findIndex(image => image.src === src);
}

function prevImage() {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
  const image = images[currentImageIndex];
  changeImage(image.src, image.caption);
}

function nextImage() {
  currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
  const image = images[currentImageIndex];
  changeImage(image.src, image.caption);
}

// ------------------ Lightbox functionality ----------------

document.getElementById('mainImage').onclick = function() {
  openLightbox(this.src, document.getElementById('imageCaption').textContent);
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  
  lightbox.style.display = 'flex';
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
