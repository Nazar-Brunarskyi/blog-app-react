import { FC, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from './authPage';
import { NotFound } from './NotFound';

export const RoutesComponent: FC = memo(
  () => {
    return (
      <Routes>
        <Route path='*' element={<NotFound />}/>

        <Route path='/login' element={<AuthPage />} />
      </Routes>
    );
  },
);
