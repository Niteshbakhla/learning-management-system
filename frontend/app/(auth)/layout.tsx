import type { ReactNode } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
            return (
                        <div className="min-h-screen grid lg:grid-cols-2">

                                    {/* ── Left: Brand Panel ── */}
                                    <div className="hidden lg:flex flex-col justify-between bg-primary p-14 text-primary-foreground">
                                                {/* Logo */}
                                                <Link href="/" className="flex items-center gap-2.5">
                                                            <div className="h-9 w-9 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                                                                        <Zap className="h-5 w-5" />
                                                            </div>
                                                            <span
                                                                        className="text-xl font-bold"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        EduFlow
                                                            </span>
                                                </Link>

                                                {/* Middle content */}
                                                <div className="space-y-8">
                                                            <h2
                                                                        className="text-4xl font-bold leading-snug"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        Learn at your own pace,
                                                                        <br />
                                                                        grow at your own speed.
                                                            </h2>
                                                            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-sm">
                                                                        Join thousands of learners building real skills with structured
                                                                        courses, hands-on projects, and expert instructors.
                                                            </p>

                                                            {/* Divider */}
                                                            <div className="w-12 h-1 bg-primary-foreground/30 rounded-full" />

                                                            {/* Stats */}
                                                            <div className="flex gap-10 pt-2">
                                                                        {[
                                                                                    { value: "10k+", label: "Learners" },
                                                                                    { value: "200+", label: "Courses" },
                                                                                    { value: "95%", label: "Completion Rate" },
                                                                        ].map((stat) => (
                                                                                    <div key={stat.label}>
                                                                                                <p
                                                                                                            className="text-3xl font-bold"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                                                                >
                                                                                                            {stat.value}
                                                                                                </p>
                                                                                                <p className="text-sm text-primary-foreground/60 mt-0.5">
                                                                                                            {stat.label}
                                                                                                </p>
                                                                                    </div>
                                                                        ))}
                                                            </div>
                                                </div>

                                                <p className="text-sm text-primary-foreground/40">
                                                            © {new Date().getFullYear()} EduFlow. All rights reserved.
                                                </p>
                                    </div>

                                    {/* ── Right: Form Panel ── */}
                                    <div className="flex items-center justify-center p-6 sm:p-14 bg-background">
                                                <div className="w-full max-w-sm">

                                                            {/* Mobile logo */}
                                                            <Link href="/" className="flex lg:hidden items-center gap-2.5 mb-10">
                                                                        <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                                                                                    <Zap className="h-5 w-5 text-primary-foreground" />
                                                                        </div>
                                                                        <span
                                                                                    className="text-xl font-bold text-foreground"
                                                                                    style={{ fontFamily: "var(--font-heading)" }}
                                                                        >
                                                                                    EduFlow
                                                                        </span>
                                                            </Link>

                                                            {children}
                                                </div>
                                    </div>

                        </div>
            );
}