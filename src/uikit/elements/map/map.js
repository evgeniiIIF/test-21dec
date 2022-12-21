"use strict";
(function yandexMap() {
  const center = [52.728413207648536, 41.452411243774414];
  if (ymaps) {
    ymaps.ready(init);

    function init() {
      ymaps.ready(init);

      function init() {
        const map = new ymaps.Map("map", {
          center: center, // ваши данные
          zoom: 14,
        });

        const placeMark = new ymaps.Placemark(
          center,
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -30],
          }
        );

        map.controls.remove("geolocationControl"); // удаляем геолокацию
        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("typeSelector"); // удаляем тип
        map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove("zoomControl"); // удаляем контрол зуммирования
        map.controls.remove("rulerControl"); // удаляем контрол правил
        // map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

        map.geoObjects.add(placeMark);
      }
    }
  }
})();
