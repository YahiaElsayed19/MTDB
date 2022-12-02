import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import ItemPage from './pages/ItemPage';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/:type/:name' element={<ItemPage />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
