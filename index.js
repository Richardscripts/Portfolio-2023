window.addEventListener('scroll', () => onScrollEffects());

function onScrollEffects() {
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop >= 1200 ||
    document.documentElement.scrollTop >= 1200
  ) {
    document.getElementById('topScrollButton').className =
      'topScrollButton bounceInUp';
  } else if (
    document.body.scrollTop <= 600 ||
    document.documentElement.scrollTop <= 600
  ) {
    document.getElementById('topScrollButton').className =
      'hidden topScrollButton';
  }
  if (
    document.body.scrollTop > 475 ||
    document.documentElement.scrollTop > 475
  ) {
    document.getElementById('first-product-info').className =
      'first-product-info fade';
  }
  if (
    document.body.scrollTop > 950 ||
    document.documentElement.scrollTop > 950
  ) {
    document.getElementById('second-product-info').className =
      'second-product-info fade';
  }

  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    document.getElementById('third-product-info').className =
      'first-product-info fade';
  }

  if (
    document.body.scrollTop > 2400 ||
    document.documentElement.scrollTop > 2400
  ) {
    document.getElementById('falling-man-image').className =
      'falling-man-image';
  }
}
