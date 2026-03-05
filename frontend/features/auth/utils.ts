export function getFirebaseErrorMessage(error: unknown): string {
            const message = error instanceof Error ? error.message : String(error);

            if (message.includes("auth/invalid-credential") ||
                        message.includes("auth/wrong-password") ||
                        message.includes("auth/user-not-found")) {
                        return "Invalid email or password. Please try again.";
            }
            if (message.includes("auth/email-already-in-use")) {
                        return "An account with this email already exists.";
            }
            if (message.includes("auth/weak-password")) {
                        return "Password must be at least 6 characters.";
            }
            if (message.includes("auth/invalid-email")) {
                        return "Please enter a valid email address.";
            }
            if (message.includes("auth/too-many-requests")) {
                        return "Too many attempts. Please try again later.";
            }
            if (message.includes("auth/network-request-failed")) {
                        return "Network error. Check your connection.";
            }

            return "Something went wrong. Please try again.";
}