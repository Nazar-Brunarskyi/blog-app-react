import { FC, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { AuthComponent } from './AuthComponent';
import { Blog } from './blog';
import { NotFound } from './NotFound';

export const RoutesComponent: FC = memo(
  () => {
    const { user } = useAppSelector(state => state.userInfo);

    return (
      <Routes>
        <Route path='*' element={
          <>
          {
            user 
            ? <NotFound />
            : <Navigate to='/login' replace={true} /> 
          }
          </>
        } />

        <Route path='/login' element={<AuthComponent />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    );
  },
);
