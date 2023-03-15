import { getAuth, signOut, User } from 'firebase/auth';
import { FC, memo, useCallback, useEffect, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { syncUser } from '../API/syncUser';
import { app } from '../firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser, setLoading } from '../redux/state/UserSlice';
import { AuthPage } from './authPage';
import { Loader } from './loader';
import { NotFound } from './NotFound';
import toast from 'react-hot-toast';

export const AuthComponent: FC = memo(
  () => {
    const auth = getAuth(app);
    const { user, isError, isLoading } = useAppSelector(stste => stste.userInfo);
    const dispatch = useAppDispatch();

    const syncWithDatabase = useCallback(
      async (user: User) => {
        const response = await syncUser(user);

        if (!response.ok) {
          toast.error('can\'t sync with Database, please try later again')
          dispatch(setLoading(true))
          await signOut(auth);
          return;
        }

        dispatch(setUser(user));
      },
      [auth, dispatch],
    );

    useEffect(() => {
      auth.onAuthStateChanged(authorizedUser => {
        if (authorizedUser) {
          syncWithDatabase(authorizedUser);
        }
      })
    }, [auth, dispatch, syncWithDatabase]);

    useEffect(() => {
      console.log(123);
    }, []);

    return (
      <div className='authComponent'>
        {!user && isLoading && <Loader />}

        {user && !isLoading && !isError && <Navigate to='/blog' />}

        {!user && !isLoading && <AuthPage />}

        {user && !isLoading && isError && <NotFound />}
      </div>
    );
  },
);
