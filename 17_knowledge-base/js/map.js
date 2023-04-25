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
        iconImageHref: `img/Subtract.svg`
        ,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }
})();
