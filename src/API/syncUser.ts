import { User } from "firebase/auth";

export const syncUser = async ({ displayName, uid }: User) => {
  const exist = await fetch('http://localhost:8080/user/sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ displayName, uid })
  });

  return exist;
};