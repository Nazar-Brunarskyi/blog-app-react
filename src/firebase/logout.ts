import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase/index';

export const logOutFromAccount = async () => {
  try {
    const auth = getAuth(app);

    await signOut(auth)

  } catch (err) {
    throw new Error('problem with authorization, try it later');
  }
}