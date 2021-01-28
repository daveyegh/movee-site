const selector = document.querySelector('.order__form-number');

const im = new Inputmask("+7-999-99-99-9");
im.mask(selector);