
fetch('http://localhost:3001/api/movie')
    .then(response => response.json())
    .then(data => {
        const movieList = document.getElementById('movie-list');
        const movies = Array.isArray(data) ? data : [data]; // Tek nesneyi diziye çevir
        movies.forEach(movie => {
            const div = document.createElement('div');
            div.className = 'movie'; // className olmalı
            div.innerHTML = `
                <h2>${movie.title}</h2>
                <img src="${movie.poster}" alt="${movie.title}" width="200" />
                <p>Oy: ${movie.vote}</p>
                <p>${movie.overview || 'Açıklama yok.'}</p>
            `;
            movieList.appendChild(div);
        });
    })
    .catch(error => console.error('hata:', error));
