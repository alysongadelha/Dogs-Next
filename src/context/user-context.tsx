"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
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
  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
