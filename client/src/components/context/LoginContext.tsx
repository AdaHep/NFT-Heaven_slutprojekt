import { createContext, useContext, useState } from "react";
import { makeReq } from "../../helper";

export interface User {
    email: string,
    password: string,
    // isAdmin: boolean
}
interface UserContext {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    fetchUser: () => void;
    signUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void;
    signOut: () => void;
    currentUser: User | any;
}

export const UserContext = createContext<UserContext>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    fetchUser: () => { },
    signUp: () => { },
    logIn: () => { },
    signOut: () => { },
    currentUser: Function,
});

export function UserProvider(props: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState<string>('')

  const fetchUser = async () => {
    try {
      let response = await makeReq<User>(`api/login`, 'GET');

      if (!response.email) {
        setIsLoggedIn(false);
      } else {
        setCurrentUser(response.email);
        setIsLoggedIn(true);
      }
    } catch (err) {
      return;
    }
  };

  const logIn = async (email: string, password: string) => {
    const user = { email, password };
    try {
      let response = await makeReq<User>('api/login', 'POST', user);
      console.log(response);
      setIsLoggedIn(true);
    } catch(err: any) {
      console.error(err);
      if (err.message === "No user with that email found") {
        // TODO: Present info to user....
        alert('No user with that email found');
      }
    }
  };

  const signUp = async ( email: string, password: string) => {
    const newUser = { email, password };
    try {
    let response = await makeReq<User>('api/user', 'POST', newUser);
    console.log(response);
    await makeReq<User>('api/login', 'POST', newUser);
    console.log(newUser)
    setIsLoggedIn(true);
    } catch(err: any) {
      console.error(err);
      if (err.message === "That email does already have an account") {
        alert('That email does already have an account');
        }
      }
  };


  const signOut = async () => {
      let response = await makeReq('api/logout', 'DELETE')
      setIsLoggedIn(false);
      window.location.reload();
  };


  return (
      <UserContext.Provider
          value={{
              isLoggedIn,
              setIsLoggedIn,
              fetchUser,
              logIn,
              signUp,
              signOut,
              currentUser,
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