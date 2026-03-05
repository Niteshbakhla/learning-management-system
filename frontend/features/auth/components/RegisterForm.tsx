"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRegister } from "../hooks/useRegister";

// ── Validation ─────────────────────────────────────────────
const registerSchema = z
            .object({
                        name: z
                                    .string()
                                    .min(1, "Name is required")
                                    .min(2, "Minimum 2 characters"),
                        email: z
                                    .string()
                                    .min(1, "Email is required")
                                    .email("Enter a valid email"),
                        password: z
                                    .string()
                                    .min(1, "Password is required")
                                    .min(8, "Minimum 8 characters")
                                    .regex(/[A-Z]/, "Must contain one uppercase letter")
                                    .regex(/[0-9]/, "Must contain one number"),
                        confirmPassword: z
                                    .string()
                                    .min(1, "Please confirm your password"),
            })
            .refine(
                        (data) => data.password === data.confirmPassword,
                        {
                                    message: "Passwords do not match",
                                    path: ["confirmPassword"],  // ← shows error on confirmPassword field
                        }
            );

type RegisterSchema = z.infer<typeof registerSchema>;

// ── Component ──────────────────────────────────────────────
export function RegisterForm() {
            const [showPassword, setShowPassword] = useState(false);
            const [errorMessage, setErrorMessage] = useState<string | null>(null);

            const { mutateAsync: registerForm } = useRegister();

            const {
                        register,
                        handleSubmit,
                        formState: { errors, isSubmitting },
            } = useForm<RegisterSchema>({
                        resolver: zodResolver(registerSchema),
            });

            const onSubmit = async (values: RegisterSchema) => {
                        setErrorMessage(null);
                        const data = await registerForm(values)
            
                        console.log("This is register data here", data)

            };

            return (
                        <div className="space-y-6">
                                    {/* Header */}
                                    <div className="space-y-1">
                                                <h1
                                                            className="text-2xl font-bold text-foreground"
                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                >
                                                            Create your account
                                                </h1>
                                                <p className="text-sm text-muted-foreground">
                                                            Start learning today — it&apos;s free
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

                                                {/* Name */}
                                                <div className="space-y-2">
                                                            <Label htmlFor="name">Full name</Label>
                                                            <div className="relative">
                                                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                                        <Input
                                                                                    id="name"
                                                                                    type="text"
                                                                                    placeholder="John Doe"
                                                                                    className="pl-9"
                                                                                    disabled={isSubmitting}
                                                                                    {...register("name")}
                                                                        />
                                                            </div>
                                                            {errors.name && (
                                                                        <p className="text-xs text-destructive">{errors.name.message}</p>
                                                            )}
                                                </div>

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
                                                            <Label htmlFor="password">Password</Label>
                                                            <div className="relative">
                                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                                        <Input
                                                                                    id="password"
                                                                                    type={showPassword ? "text" : "password"}
                                                                                    placeholder="Min 8 chars, 1 uppercase, 1 number"
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

                                                {/* Confirm Password */}
                                                <div className="space-y-2">
                                                            <Label htmlFor="confirmPassword">Confirm password</Label>
                                                            <div className="relative">
                                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                                        <Input
                                                                                    id="confirmPassword"
                                                                                    type={showPassword ? "text" : "password"}
                                                                                    placeholder="••••••••"
                                                                                    className="pl-9"
                                                                                    disabled={isSubmitting}
                                                                                    {...register("confirmPassword")}
                                                                        />
                                                            </div>
                                                            {errors.confirmPassword && (
                                                                        <p className="text-xs text-destructive">
                                                                                    {errors.confirmPassword.message}
                                                                        </p>
                                                            )}
                                                </div>

                                                {/* Submit */}
                                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                            {isSubmitting ? "Creating account..." : "Create account"}
                                                </Button>
                                    </form>

                                    {/* Login link */}
                                    <p className="text-center text-sm text-muted-foreground">
                                                Already have an account?{" "}
                                                <Link
                                                            href="/login"
                                                            className="text-primary font-medium hover:underline"
                                                >
                                                            Sign in
                                                </Link>
                                    </p>
                        </div>
            );
}