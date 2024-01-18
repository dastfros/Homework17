
let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8
  };
  

  for (let key in movie) {
    console.log(`${key} - "${movie[key]}"`);
  }
  
