function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  btn.addEventListener('click', () => {
    if (text.hidden == false) {
      return text.hidden = true;
    } else {
      return text.hidden = false;
    }
  })
}
