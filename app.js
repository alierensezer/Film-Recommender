fetch('movie.json?v=' + new Date().getTime())
  .then(res => res.json())
  .then(data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('vote').textContent = `IMDB Puanı: ${data.vote}`;
    document.getElementById('overview').textContent = data.overview;
    document.getElementById('poster').src = data.poster;
    document.getElementById('poster').alt = `Poster - ${data.title}`;
  })
  .catch(() => {
    document.querySelector('.container').innerHTML = '<p style="color: #f55;">Veri alınamadı.</p>';
  });
