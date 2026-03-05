import {
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            signOut,
            updateProfile,
            type UserCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import type { LoginFormValues, RegisterFormValues, BackendUser } from "./types";
import axios from "axios";

export const authApi = {
            login: ({ email, password }: LoginFormValues): Promise<UserCredential> => {
                        return signInWithEmailAndPassword(auth, email, password);
            },

            register: async ({ name, email, password }: RegisterFormValues): Promise<UserCredential> => {
                        const credential = await createUserWithEmailAndPassword(auth, email, password);
                        // Set display name right after account creation
                        await updateProfile(credential.user, { displayName: name });
                        return credential;
            },

            logout: (): Promise<void> => {
                        return signOut(auth);
            },

            // Send Firebase ID token to your backend → get back user with role
            syncWithBackend: async (idToken: string): Promise<BackendUser> => {
                        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {}, {
                                    headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${idToken}`
                                    }
                        });
                        return data;
            },
};