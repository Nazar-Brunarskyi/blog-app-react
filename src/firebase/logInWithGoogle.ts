import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app, googleAuthProvider } from './index'
import toast from 'react-hot-toast';
import { syncUser } from '../API/syncUser';

export const logInWithGoogle = async () => {
  const auth = getAuth(app);

  const { user } = await signInWithPopup(auth, googleAuthProvider);

  const response = await syncUser(user);

  if (!response.ok) {
    toast.error('can\'t signIn')
    await signOut(auth);
    return null;
  }

  return user;
}