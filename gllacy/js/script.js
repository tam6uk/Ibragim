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