window.addEventListener('scroll', () => myFunction());

function myFunction() {
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
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById('first-product-info').className =
      'first-product-info fade';
  }
  if (
    document.body.scrollTop > 1150 ||
    document.documentElement.scrollTop > 1150
  ) {
    document.getElementById('second-product-info').className =
      'second-product-info fade';
  }

  if (
    document.body.scrollTop > 1700 ||
    document.documentElement.scrollTop > 1700
  ) {
    document.getElementById('third-product-info').className =
      'first-product-info fade';
  }
}
