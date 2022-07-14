import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import MovieScreenReview from '../../pages/movie-screen-review/movie-screen-review';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import {AppPageRoute, AuthorizationStatus} from '../../contants';
import PrivateRoute from '../private-route/private-route';

type MainPromoFilm = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: MainPromoFilm): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPageRoute.Main} element={<MainScreen title={title} genre={genre} year={year}/>} />
        <Route path={AppPageRoute.Login} element={<AuthScreen />} />
        <Route path={AppPageRoute.Film} element={<MovieScreen />} />
        <Route path={AppPageRoute.FilmReview} element={<MovieScreenReview />} />
        <Route path={AppPageRoute.MyList} element={
          <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppPageRoute.Player} element={<PlayerScreen />} />
        <Route path='*' element={<UnexistScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
