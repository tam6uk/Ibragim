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

/* Google Map */
function initMap() {
  var uluru = {lat: 34.82143136149785, lng: -111.78913030180661};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: {lat: 34.86143136149785, lng: -111.75913030180661},
    map: map
  });
}