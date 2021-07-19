// estas funciones son de ejemplo

export const maping = (data) => {
  let posters2 = []

  data.films.forEach(movie => {
      posters2 += `
        <div class="card_film">
            <img src=${movie.poster}>
            <h2>${movie.title}</h2>
        </div>
      `
  })
  return posters2
};

export const anotherExample = () => {
  return 'OMG';
};
