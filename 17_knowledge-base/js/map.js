(() => {
  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
      {
        center: [48.872185, 2.354224],
        zoom: 18,
        controls: [] /* Убираем элементы управления*/
      },
      {
        suppressMapOpenBlock: true, /* Убираем элементы управления*/
      }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [48.872185, 2.354224],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.47742L3.10291 5.58033L7.58033 1.10291" stroke="#CCB26E"/>
        </svg>
        ,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }
})();
