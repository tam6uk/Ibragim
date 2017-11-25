var btn = document.querySelector('.main-form__btn'),
		form = document.querySelector('.main-form-wrap');

if(btn) {
      btn.addEventListener("click", function(e) {
    	var target = event.target;
    	if(target.classList.contains('btn-toggle')) {
            form.classList.toggle('popup-hide');
            form.classList.toggle('popup-show');

            if(form.classList.contains('popup-show')) {
              form.querySelector('input').focus();
            }
            return;
       }
    });
}