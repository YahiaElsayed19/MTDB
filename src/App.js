import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import ItemPage from './pages/ItemPage';
import MoviesPage from './pages/MoviesPage';
import TvShowsPage from './pages/TvShowsPage';
import TopRatedMovies from './pages/TopRatedMovies';
import TopRatedTv from './pages/TopRatedTv';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/:type/:name' element={<ItemPage />} />
        <Route path='/home/movies' element={<MoviesPage />} />
        <Route path='/home/tvshows' element={<TvShowsPage />} />
        <Route path='/home/top-rated-movies' element={<TopRatedMovies />} />
        <Route path='/home/top-rated-tvshows' element={<TopRatedTv />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
