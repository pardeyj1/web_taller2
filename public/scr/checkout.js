var typeInput = document.querySelector('[name="name"]');
var buttons = document.querySelectorAll('.sendBtn');
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (ev) {
        typeInput.value = ev.target.innerText;
        console.log('funcionando', ev.target.innerText);
    });
});
var form = document.querySelector('.checkout_form');
form.addEventListener('submit', function () {
    var input = document.querySelector('.checkoutform__products');
    input.value = localStorage.getItem('cartList');
    localStorage.removeItem('cartList');
});