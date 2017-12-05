ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938605, 30.329055],
            controls: ['zoomControl'],
            zoom: 16
        }, {}),
        // Создаём макет содержимого.
        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Gllacy'
        }, 
        {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_pin.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -135]
        });
    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom'); 
});

var feedback_btn = document.querySelector('#feedback'),
    feedback_modal = document.querySelector('.modal-feedback'),
    feeedback_overlay = document.querySelector('.overlay'),
    feedback_close = document.querySelector('.modal-close');
    feedback_btn.addEventListener('click', function () {
        feedback_modal.classList.add('modal-show');
        feeedback_overlay.classList.add('modal-show');
    });
    feedback_close.addEventListener('click', function () {
        feedback_modal.classList.remove('modal-show');
        feeedback_overlay.classList.remove('modal-show');
    });