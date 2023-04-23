import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import SearchPage from './pages/SearchPage/SearchPage';
import MyPage from './pages/MyPage/MyPage';
import Regist from './pages/ProductRegist/ProductRegist';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import MyBiddingPage from './pages/MyBidding/MyBidding';
import DepositPage from './pages/DepositPage/DepositPage';
import Preparing from './pages/Preparing/Preparing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export var token =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJtYXN0ZXIiLCJzdWIiOiJBY2Nlc3NUb2tlbiIsImlhdCI6MTY4MTg4MTE2NCwiZXhwIjoxNjgzMDkwNzY0fQ.WTVSTVsxVi8NNlhiENVJgqNNqSO96LA9TDrAe8Bymys';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          <Route path="/mybidding" element={<MyBiddingPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/progression" element={<SearchPage />} />
          <Route path="/upcoming" element={<Preparing />} />
          <Route path="/result" element={<SearchPage />} />
          <Route path="/preparing" element={<Preparing />} />
          <Route path="/inform" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
