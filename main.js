'use strict';

const rus = document.getElementById('rus');
const science = document.getElementById('science');
const technology = document.getElementById('technology');
const entertaiment = document.getElementById('entertaiment');
const main = document.getElementsByTagName('main')[0];

const apiKey = '10114b0fdf404dff99fe98fbad71ccfc';
const rusUrl = 'https://newsapi.org/v2/top-headlines?' + 'country=ru&' + 'apiKey=';
const scienceUrl = 'https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=';
const technologyUrl = 'https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=';
const entertaimentUrl = 'https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=';

/*
https://newsapi.org/docs/get-started#top-headlines
https://medium.com/siliconwat/how-javascript-async-await-works-3cab4b7d21da
*/

async function getNews(url) {
  let response = await fetch(url + apiKey);
  let jsonResponse = await response.json();
  let articlesArray = jsonResponse.articles.slice(0,5);
  return articlesArray;
}

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore">Читать дальше</a>' +
      ' </div>' +
      ' <div class="images">' +
      '   <img class="img" src="' + article.urlToImage + '" />' +
      ' </div>' +
      '</div>';
    main.innerHTML += articleRow;
  });
  return articles;
}

// При нажатии на кнопку запускается рендер

rus.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(rusUrl).then(articlesArray => renderNews(articlesArray));
}, false);

science.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(scienceUrl).then(articlesArray => renderNews(articlesArray));
}, false);

technology.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(technologyUrl).then(articlesArray => renderNews(articlesArray));
}, false);

entertaiment.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(entertaimentUrl).then(articlesArray => renderNews(articlesArray));
}, false);
