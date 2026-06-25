"use client";

import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------
  // Register
  // ---------------------------
  const registerUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ---------------------------
  // Login
  // ---------------------------
  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ---------------------------
  // Google Login
  // ---------------------------
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ---------------------------
  // Logout
  // ---------------------------
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ---------------------------
  // Update Profile
  // ---------------------------
  const updateUserProfile = (profile: { displayName?: string }) => {
    if (!auth.currentUser)
      return Promise.reject("No user logged in");

    return updateProfile(auth.currentUser, profile);
  };

  // ---------------------------
  // 🔥 MAIN FIX: Firebase + MongoDB merge
  // ---------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/users/${currentUser.email}`
        );

        const dbUser = await res.json();

        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "",
          photoURL: currentUser.photoURL || "",
          role: dbUser?.role || "student",
        });
      } catch (err) {
        console.log("Auth merge error:", err);

        // fallback user (still allow login)
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "",
          photoURL: currentUser.photoURL || "",
          role: "student",
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ---------------------------
  // Context value
  // ---------------------------
  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}