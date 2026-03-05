"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { authApi } from "@/features/auth/api";
import type { SessionUser, AuthStatus } from "@/features/auth/types";

interface AuthContextValue {
  user: SessionUser | null;
  status: AuthStatus;
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setStatus("unauthenticated");
        return;
      }
      try {
        const idToken = await firebaseUser.getIdToken();
        const backendUser = await authApi.syncWithBackend(idToken);
        setUser({ ...backendUser, firebaseUid: firebaseUser.uid });
        setStatus("authenticated");
      } catch {
        setUser(null);
        setStatus("unauthenticated");
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await authApi.logout();
    setUser(null);
    setStatus("unauthenticated");
  };


  return (
    <AuthContext.Provider value={{ user, status, isLoading: status === "loading", isAuthenticated: status === "authenticated", logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}