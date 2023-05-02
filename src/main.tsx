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
import ProductFix from './pages/ProductFix/ProductFix';
import Upcoming from './pages/Upcoming/Upcoming';
import Result from './pages/Result/Result';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJhZG1pbkBhYmMuY29tIiwic3ViIjoiQWNjZXNzVG9rZW4iLCJpYXQiOjE2ODI2MDYwODcsImV4cCI6MTY4MjYwOTY4N30.ZSRZfUQqRrOkT-swd15M-dYLJnaBjXtBeqVS4VeMyfM';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
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
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/result" element={<Result />} />
            <Route path="/preparing" element={<Preparing />} />
            <Route path="/inform" element={<MainPage />} />
            <Route path="/modify" element={<ProductFix />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </RecoilRoot>
);
