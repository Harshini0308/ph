const images = [
     'C:\Users\harsh\ph\images\image1.jpg',
     'C:\Users\harsh\ph\images\image2.jpg',
     'C:\Users\harsh\ph\images\image3.jpg',
     'C:\Users\harsh\ph\images\image4.jpg',
     'C:\Users\harsh\ph\images\image5.jpg',
     'C:\Users\harsh\ph\images\image6.jpg',
  

];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Photo';
    gallery.appendChild(imgElement);
});