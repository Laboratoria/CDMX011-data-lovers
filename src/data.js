// estas funciones son de ejemplo
export const posters = (data) => {
    let DirPoster = [20];
    let i=0;
    do {
      DirPoster[i]= data.films[i].poster;
      i++
      console.log(DirPoster[i]);
    } while (i<20);
    return DirPoster;
};

export const anotherExample = () => {
  return 'OMG';
};
