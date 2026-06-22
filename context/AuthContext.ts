import { createContext } from "react";
import { User } from "firebase/auth";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<any>;
  signInUser: (email: string, password: string) => Promise<any>;
  signInGoogle: () => Promise<any>;
  logOut: () => Promise<any>;
  updateUserProfile: (profile: { displayName?: string }) => Promise<any>;
};

export const AuthContext = createContext<AuthContextType | null>(null);