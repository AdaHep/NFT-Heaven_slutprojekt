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
    //signUp: () => void;
    logIn: (email: string, password: string) => void;
    signOut: () => void;
    currentUser: User | any;
}

export const UserContext = createContext<UserContext>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    fetchUser: () => { },
    //signUp: () => { },
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
    } catch(err: any) {
      console.error(err);
      if (err.message === "No user with that email found") {
        // TODO: Present info to user....
      }
    }
  };

    // const signUp = async () => {
    //     try {
    //     let newUserInputs = {
    //         username: newUserUsernameValue,
    //         email: newUserEmailValue,
    //         password: newUserPasswordValue
    //     };

    //     let response = await fetch("http://localhost:8080/account/register", {
    //         method: "POST",
    //         body: JSON.stringify(newUserInputs),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     });
    //     let data = await response.json()
    //     return response
    // } catch (err) {
    //     console.error(err);
    // }


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
            //signUp,
            signOut,
            currentUser,
        }}
    >
        {props.children}
    </UserContext.Provider>
);
}

export const useUser = () => useContext(UserContext);