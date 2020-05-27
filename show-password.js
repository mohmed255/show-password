
var inpt = document.getElementById('pass'),
            btn = document.getElementById('click');
        document.getElementById('click').onclick = function () {
            
            'use strict';
            if (btn.getAttribute('class') === 'show') {
                inpt.setAttribute('type', 'text');
                btn.setAttribute('class', 'hide');
                btn.textContent = 'Hide password';
            } else {
                inpt.setAttribute('type', 'password');
                btn.setAttribute('class', 'show');
                btn.textContent = 'Show password';
            }
        };