import { createContext } from "react";

type AppUser = {
  uid: string;
  email: string | null;
  displayName?: string;
  photoURL?: string;
  role?: "student" | "tutor" | "admin";
};

type AuthContextType = {
  user: AppUser | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<any>;
  signInUser: (email: string, password: string) => Promise<any>;
  signInGoogle: () => Promise<any>;
  logOut: () => Promise<any>;
  updateUserProfile: (profile: { displayName?: string }) => Promise<any>;
};

export const AuthContext = createContext<AuthContextType | null>(null);