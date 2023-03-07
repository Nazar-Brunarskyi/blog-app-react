import { FC, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthComponent } from './AuthComponent';
import { Blog } from './blog';
import { NotFound } from './NotFound';

export const RoutesComponent: FC = memo(
  () => {
    return (
      <Routes>
        {/* <Route path='*' element={<NotFound />}/> */}
        <Route path='*' element={<Navigate to='/login' replace={true} />} />

        <Route path='/login' element={<AuthComponent />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    );
  },
);
