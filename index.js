window.addEventListener('scroll', onScrollEffects);

function onScrollEffects() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  showTopScrollButton(scrollTop);
  fadeOutDrawingImage(scrollTop);
  showProductInfo(scrollTop);
}

function showTopScrollButton(scrollTop) {
  const topScrollButton = document.getElementById('topScrollButton');
  if (scrollTop >= 1200) {
    topScrollButton.className = 'topScrollButton bounceInUp';
  } else if (scrollTop <= 600) {
    topScrollButton.className = 'hidden topScrollButton';
  }
}

function fadeOutDrawingImage(scrollTop) {
  const drawingImage = document.getElementById('drawing-image');
  if (scrollTop > 150) {
    drawingImage.className = 'drawing-image fadeOut';
  }
}

function showProductInfo(scrollTop) {
  const firstProductInfo = document.getElementById('first-product-info');
  const secondProductInfo = document.getElementById('second-product-info');
  const thirdProductInfo = document.getElementById('third-product-info');

  if (scrollTop > 475) {
    firstProductInfo.className = 'first-product-info fade';
  }

  if (scrollTop > 950) {
    secondProductInfo.className = 'second-product-info fade';
  }

  if (scrollTop > 1500) {
    thirdProductInfo.className = 'first-product-info fade';
  }
}
