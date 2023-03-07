import { getAuth, signInWithPopup, User } from 'firebase/auth';
import { app, googleAuthProvider } from '../firebase/index'

export const logInWithGoogle = async () => {
  try {
    const auth = getAuth(app);

    const credentials = await signInWithPopup(auth, googleAuthProvider);

    return credentials.user;

  } catch (err) {
    throw new Error('problem with authorization, try it later');
  }
}