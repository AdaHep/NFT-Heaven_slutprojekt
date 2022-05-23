import { createContext, useContext, useState } from "react";
import { makeReq } from "../../helper";


export interface userInterface {
    email: string,
    password: string,
    // isAdmin: boolean
}
interface UserContext {
    fetchUser: () => void;
    //signUp: () => void;
    logIn: (email: string, password: string) => void;
    signOut: () => void;
}

export const UserContext = createContext<UserContext>({
    fetchUser: () => { },
    //signUp: () => { },
    logIn: () => { },
    signOut: () => { },
});

export function UserProvider(props: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [loggedInUser, setLoggedInUser] = useState({
    //     _id: 1,
    //     username: "wagwan",
    //     userRealName: "test",
    //     userPassword: "wagwan",
    //     isAdmin: true,
    // });

  const fetchUser = async () => {
    try {
      let response = await makeReq(`api/login`, 'GET');

      if (!response.email) {
        setIsLoggedIn(false);
      } else {
        // setLoggedInUser(response);
        setIsLoggedIn(true);
      }
    } catch (err) {
      return;
    }
  };

  const logIn = async (email: string, password: string) => {
    const user = { email, password };
    let response = await makeReq('api/login', 'POST', user);
    alert(response);
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
    let response = fetch(`http://localhost:8080/account/logout`, {
        method: "DELETE",
        credentials: "include",
    });
    setIsLoggedIn(false);
    // setLoggedInUser({
    //     _id: 1,
    //     username: "wagwan",
    //     userRealName: "test",
    //     userPassword: "wagwan",
    //     isAdmin: true,
    // });
    window.location.reload();
};


return (
    <UserContext.Provider
        value={{
            fetchUser,
            logIn,
            //signUp,
            signOut,
        }}
    >
        {props.children}
    </UserContext.Provider>
);
}

export const useUser = () => useContext(UserContext);