import Logo from '../../components/logo/logo';
import { Link, useParams } from 'react-router-dom';
import { Film } from '../../types/film';

type MovieProp = {
  filmList: Film[]
}

const MovieScreen = ({ filmList }: MovieProp): JSX.Element => {
  const queryParam = useParams();
  const targetFilm = filmList.find((film) => film.id === Number(queryParam.id));

  return (
    <section className="movie-screen">
      <section className="film-card film-card--full" style={{ background: targetFilm?.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={targetFilm?.backgroundImage} alt={targetFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLightLogo={false} />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#/">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{targetFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{targetFilm?.genre}</span>
                <span className="film-card__year">{targetFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${queryParam.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={'review'} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={targetFilm?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{targetFilm?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{targetFilm?.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{targetFilm?.description}</p>
                <p className="film-card__director"><strong>Director: {targetFilm?.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {targetFilm?.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <Logo isLightLogo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MovieScreen;
