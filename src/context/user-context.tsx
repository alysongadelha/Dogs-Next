"use client";

import logout from "@/actions/logout";
import validateToken from "@/actions/validate-token";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  setUserState: Dispatch<SetStateAction<User | null>>;
};

type Props = {
  children: React.ReactNode;
  user: User | null;
};

const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useContext must be inside of a Provider");
  }
  return context;
};

export function UserContextProvider({ children, user }: Props) {
  const [userState, setUserState] = useState<User | null>(user);

  useEffect(() => {
    const validate = async () => {
      const { ok } = await validateToken();
      if (!ok) await logout();
    };

    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
