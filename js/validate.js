const form = document.querySelector('.order__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const validate = new Bouncer(form, {
    disableSubmit: true,
    messageAfterField: true,
    patternMismatch: {
        tel: 'Пожалуйста введите валидный номер телефона!',
    },
    messages: {
        missingValue: {
            default: 'Заполните это поле!'
        }
    }
});