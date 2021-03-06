'use strict';
// función para saber si la seríe está clicada
function isClicked(serie) {
  const clickedFound = favorites.find((fav) => {
    return fav.show.id === serie.show.id;
  });
  if (clickedFound === undefined) {
    return false;
  } else {
    return true;
  }
}
//funcion que pinta las series
function paintSeries() {
  let html = '';
  let clickedClass = '';
  for (const serie of seriesData) {
    const isClickedSerie = isClicked(serie);
    if (isClickedSerie === true) {
      clickedClass = 'clicked';
    } else {
      clickedClass = '';
    }

    html += `<li class="js_serie list__item ${clickedClass}" id="${serie.show.id}">`;

    if (serie.show.image === null) {
      html += `<img class="list__item--img" src="${imageNull}" alt="" />`;
    } else {
      html += `<img class="list__item--img" src="${serie.show.image.medium}" alt="" >`;
    }
    html += `<h3 class="list__item--title">${serie.show.name}</h3>`;

    html += `</li>`;
  }
  series.innerHTML = html;
  listenshows();
}
