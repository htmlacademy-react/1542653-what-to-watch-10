import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';


type FilmListProp = {
  films: Film[]
};

const FilmList = ({ films }: FilmListProp): JSX.Element => {
  const [filmActive, setFilmActive] = useState({id: 1});
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
};

export default FilmList;
