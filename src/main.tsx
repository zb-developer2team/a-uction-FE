import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },
  {
    path: 'regist',
    element: <Regist />,
  },
  {
    path: 'detail',
    element: <ProductDetailPage />,
  },
  {
    path: 'mybidding',
    element: <MyBiddingPage />,
  },
  {
    path: 'deposit',
    element: <DepositPage />,
  },
  {
    path: 'progression',
    element: <SearchPage />,
  },
  {
    path: 'upcoming',
    element: <Preparing />,
  },
  {
    path: 'result',
    element: <SearchPage />,
  },
  {
    path: 'preparing',
    element: <Preparing />,
  },
  {
    path: 'inform',
    element: <MainPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
