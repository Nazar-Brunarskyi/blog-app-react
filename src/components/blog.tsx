import { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export const Blog: FC = memo(
  () => {
    const { user } = useAppSelector(stste => stste.userInfo);

    return (
      <>
        {
          user
          ? <h1>blog</h1>
          : <Navigate to='/login'/>
        }
      </>
    );
  },
);
