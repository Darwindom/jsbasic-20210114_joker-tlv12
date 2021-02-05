  
function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let slider = document.querySelectorAll('.carousel__slide').length;
  let sliderWidth = carousel.offsetWidth;

  let offset = 0;

  arrowLeft.style.display = 'none'

  arrowRight.addEventListener('click', () => {
    offset -= sliderWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    arrowLeft.style.display = '';
    if (offset == -(sliderWidth*(slider - 1))){
      arrowRight.style.display = 'none'
    }
  })

  arrowLeft.addEventListener('click', () => {

    offset += sliderWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    arrowRight.style.display = '';
    if (offset == 0){
      arrowLeft.style.display = 'none'
    }else{
      offset -= sliderWidth.clientWidth;
  }
  })
  
}