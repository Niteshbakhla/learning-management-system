"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

// ── Validation ─────────────────────────────────────────────
const loginSchema = z.object({
            email: z
                        .string()
                        .min(1, "Email is required")
                        .email("Enter a valid email"),
            password: z
                        .string()
                        .min(1, "Password is required")
                        .min(6, "Minimum 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

// ── Component ──────────────────────────────────────────────
export function LoginForm() {
            const [showPassword, setShowPassword] = useState(false);
            const [errorMessage, setErrorMessage] = useState<string | null>(null);
            const { user, isLoading } = useAuth();

            const { mutateAsync, isPending } = useLogin();
            const router = useRouter();


            useEffect(() => {
                        if (isLoading) return;       // wait for auth to initialize
                        if (!user) return;           // not logged in yet

                        // user is now populated — redirect based on role
                        if (user.role === "admin") router.push("/admin");
                        else if (user.role === "instructor") router.push("/instructor");
                        else router.push("/dashboard");
            }, [user, isLoading]);

            const {
                        register,
                        handleSubmit,
                        formState: { errors, isSubmitting },
            } = useForm<LoginSchema>({
                        resolver: zodResolver(loginSchema),
            });


            const onSubmit = async (values: LoginSchema) => {

                        try {
                                    await mutateAsync(values)

                        } catch (error) {
                                    setErrorMessage("Login failed");
                        }
            };

            return (
                        <div className="space-y-6">
                                    {/* Header */}
                                    <div className="space-y-1">
                                                <h1
                                                            className="text-2xl font-bold text-foreground"
                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                >
                                                            Welcome back
                                                </h1>
                                                <p className="text-sm text-muted-foreground">
                                                            Sign in to continue learning
                                                </p>
                                    </div>

                                    {/* Error */}
                                    {errorMessage && (
                                                <Alert variant="destructive">
                                                            <AlertDescription>{errorMessage}</AlertDescription>
                                                </Alert>
                                    )}

                                    {/* Form */}
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                                {/* Email */}
                                                <div className="space-y-2">
                                                            <Label htmlFor="email">Email</Label>
                                                            <div className="relative">
                                                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                                        <Input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    placeholder="you@example.com"
                                                                                    className="pl-9"
                                                                                    disabled={isSubmitting}
                                                                                    {...register("email")}
                                                                        />
                                                            </div>
                                                            {errors.email && (
                                                                        <p className="text-xs text-destructive">{errors.email.message}</p>
                                                            )}
                                                </div>

                                                {/* Password */}
                                                <div className="space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                        <Label htmlFor="password">Password</Label>
                                                                        <Link
                                                                                    href="/forgot-password"
                                                                                    className="text-xs text-primary hover:underline"
                                                                        >
                                                                                    Forgot password?
                                                                        </Link>
                                                            </div>
                                                            <div className="relative">
                                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                                        <Input
                                                                                    id="password"
                                                                                    type={showPassword ? "text" : "password"}
                                                                                    placeholder="••••••••"
                                                                                    className="pl-9 pr-9"
                                                                                    disabled={isSubmitting}
                                                                                    {...register("password")}
                                                                        />
                                                                        <button
                                                                                    type="button"
                                                                                    onClick={() => setShowPassword((p) => !p)}
                                                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                                        >
                                                                                    {showPassword
                                                                                                ? <EyeOff className="h-4 w-4" />
                                                                                                : <Eye className="h-4 w-4" />
                                                                                    }
                                                                        </button>
                                                            </div>
                                                            {errors.password && (
                                                                        <p className="text-xs text-destructive">{errors.password.message}</p>
                                                            )}
                                                </div>

                                                {/* Submit */}
                                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                            {isSubmitting ? "Signing in..." : "Sign in"}
                                                </Button>
                                    </form>

                                    {/* Register link */}
                                    <p className="text-center text-sm text-muted-foreground">
                                                Don&apos;t have an account?{" "}
                                                <Link
                                                            href="/register"
                                                            className="text-primary font-medium hover:underline"
                                                >
                                                            Create one
                                                </Link>
                                    </p>
                        </div>
            );
}