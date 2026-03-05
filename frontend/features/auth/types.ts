

export interface LoginFormValues {
            email: string,
            password: string
}

export interface RegisterFormValues {
            name: string,
            email: string,
            password: string,
            confirmPassword: string
}

export interface BackendUser {
            id: string,
            email: string,
            name: string
            role: "student" | "instructor" | "admin",
            avatar?: string
}

export interface SessionUser extends BackendUser {
            firebaseUid: string
}

export type AuthStatus = "loading" | "authenticated" | "unauthenticated"