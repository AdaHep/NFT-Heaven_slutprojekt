import { createContext, useContext, useEffect, useState } from "react";
import { makeReq } from "../../helper";

export interface User {
    email: string,
    isAdmin: boolean
}
interface UserContext {
    signUp: (email: string, password: string) => Promise<boolean>;
    logIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => Promise<void>;
    currentUser?: User;
}


export const UserContext = createContext<UserContext>({
    signUp: () => Promise.resolve(true),
    logIn: () => Promise.resolve(true),
    signOut: () => Promise.resolve()
});

export function UserProvider(props: any) {
  const [currentUser, setCurrentUser] = useState<User>()
  
  const logIn = async (email: string, password: string) => {
    try {
      const user = await makeReq<User>('api/login', 'POST', { email, password });
      setCurrentUser(user)
      return true;
    } catch(err: any) {
      console.error(err);
      setCurrentUser(undefined);
      return false;
    }
  };

  const signUp = async ( email: string, password: string) => {
    const newUser = { email, password };
    try {
      await makeReq<User>('api/user', 'POST', newUser);
      const user = await makeReq<User>('api/login', 'POST', newUser);
      setCurrentUser(user);
      return true;
    } catch(err: any) {
      setCurrentUser(undefined);
      console.error(err);
      return false;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let user = await makeReq<User>(`api/auth`, 'GET');
        console.log(user);
        setCurrentUser(user);
      } catch (err) {
        setCurrentUser(undefined);
      }
    };

    fetchUser();
  }, []);


  const signOut = async () => {
      await makeReq('api/logout', 'DELETE')
      setCurrentUser(undefined);
      // window.location.reload();
  }


  return (
      <UserContext.Provider
          value={{
              logIn,
              signUp,
              signOut,
              currentUser
          }}
      >
          {props.children}
      </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
export default UserProvider;