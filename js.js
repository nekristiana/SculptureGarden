const boxes = document.getElementsByClassName('box');

document.addEventListener('DOMContentLoaded', () => {
  window.onscroll = function () {
    scrollFunction();
  };

  hoverOnBoxes();
});

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.fontSize = '40px';
  } else {
    document.getElementById('header').style.fontSize = '60px';
  }
}

function hoverOnBoxes() {
  // console.log(boxes);
  Array.from(boxes).forEach((box) => {
    let boxImages = box.getElementsByTagName('img');
    let boxCaptions = box.getElementsByTagName('figcaption');
    box.addEventListener('mouseenter', () => {
      Array.from(boxImages).forEach((boxImage) => {
        boxImage.classList.add('active');
      });
      Array.from(boxCaptions).forEach((boxCaption) => {
        boxCaption.classList.add('active');
      });
    });
    box.addEventListener('mouseleave', () => {
      Array.from(boxImages).forEach((boxImage) => {
        boxImage.classList.remove('active');
        // boxImage.classList.remove('active'); // in case you want to hide the image when you leave the container
      });
      Array.from(boxCaptions).forEach((boxCaption) => {
        boxCaption.classList.remove('active');
        // boxCaption.classList.remove('active'); // in case you want to hide the image when you leave the container
      });
    });
  });
}
//classList.remove('active') lai butu ka ieprikes, insted of classList.add
