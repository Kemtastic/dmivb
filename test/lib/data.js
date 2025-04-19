export const movies = [
  { 
    id: 1,
    title: 'The Matrix',
    type: 'movie',
    releaseYear: 1999,
    genres: ['Action', 'Sci-Fi'],
    platform: 'netflix',
    trailer: 'm8e-FF8MsqU',
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    img: '/matrix.jpg',
    score: 8.7,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: 'Inception',
    type: 'movie',
    releaseYear: 2010,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    platform: 'prime',
    trailer: 'YoHD9XEInc0',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    description: 'A thief who enters the dreams of others to steal their secrets is offered a chance to regain his old life in exchange for planting an idea in a CEO\'s mind.',
    img: '/inception.jpg',
    score: 8.8,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: 3,
    title: 'Breaking Bad',
    type: 'series',
    releaseYear: 2008,
    genres: ['Crime', 'Drama', 'Thriller'],
    platform: 'netflix',
    trailer: 'HhesaQXLuRY',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.',
    img: '/breakingbad.jpg',
    score: 9.5,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: 4,
    title: 'Stranger Things',
    type: 'series',
    releaseYear: 2016,
    genres: ['Drama', 'Fantasy', 'Horror'],
    platform: 'netflix',
    trailer: 'b9EkMc79ZSU',
    director: 'The Duffer Brothers',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
    img: '/strangerthings.jpg',
    score: 8.7,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: 5,
    title: 'The Mandalorian',
    type: 'series',
    releaseYear: 2019,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    platform: 'disney',
    trailer: 'aOC8E8z_ifw',
    director: 'Jon Favreau',
    cast: ['Pedro Pascal', 'Carl Weathers', 'Giancarlo Esposito'],
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    img: '/mandalorian.jpg',
    score: 8.8,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 6,
    title: 'Kurtlar Vadisi',
    type: 'series',
    releaseYear: 2003,
    genres: ['Action', 'Crime', 'Drama'],
    platform: 'Show TV, Kanal D, Star TV',
    trailer: 'C2IJ94vW5BI', 
    director: 'Serdar Akar',
    cast: ['Necati Şaşmaz', 'Özgü Namal', 'Gürkan Uygun', 'Kenan Çoban', 'Selçuk Yöntem'],
    description: 'Polat Alemdar, "Kurtlar Vadisi" adlı gizli bir devlet operasyonuyla yeni bir yüz ve kimlikle yeraltı dünyasına sızar. Görevi, Türkiye’de tüm suçları kontrol eden karanlık bir yapılanma olan Konsey’i ve onun üyelerini açığa çıkartarak mafya düzenini çökertmektir. Aksiyon, entrika ve derin devlet ilişkilerinin iç içe geçtiği bu dizi, Türk televizyon tarihinde iz bırakan yapımlar arasındadır.',    img: '/kurtlarvadisi.jpg',
    score: 11,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
  
];

export const getMovies = () => {
  return movies;
};

export const getMovieById = (id) => {
  return movies.find(movie => movie.id === Number(id)) || null;
};

export const addMovie = (movieData) => {
  const newMovie = {
    ...movieData,
    id: movies.length + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  movies.push(newMovie);
  return newMovie;
};

export const updateMovie = (id, movieData) => {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index === -1) {
    throw new Error('Movie not found');
  }

  movies[index] = {
    ...movies[index],
    ...movieData,
    id: Number(id),
    updatedAt: new Date()
  };

  return movies[index];
};

export const deleteMovie = (id) => {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index === -1) {
    throw new Error('Movie not found');
  }

  const deletedMovie = movies[index];
  movies.splice(index, 1);
  return deletedMovie;
};