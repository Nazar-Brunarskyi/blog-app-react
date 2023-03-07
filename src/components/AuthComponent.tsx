import { getAuth } from 'firebase/auth';
import { FC, memo, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { app } from '../firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/state/UserSlice';
import { AuthPage } from './authPage';
import { Loader } from './loader';

export const AuthComponent: FC = memo(
  () => {
    const auth = getAuth(app);
    const { user, isError, isLoading } = useAppSelector(stste => stste.userInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
      auth.onAuthStateChanged(authorizedUser => {
          dispatch(setUser(authorizedUser));
      })
    }, [auth, dispatch]);

    return (
      <div className='authComponent'>
        {!user && isLoading && <Loader />}

        {user && !isLoading && !isError && <Navigate to='/blog' />}

        {/* {!user && !isLoading && !isError && <Navigate to='/login' />} */}
        {!user && !isLoading && !isError && <AuthPage />}
      </div>
    );
  },
);
