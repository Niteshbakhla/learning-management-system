"use client"
import { ChevronRight, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
            return (
                        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                                                {/* Logo */}
                                                <Link href="/" className="flex items-center gap-2">
                                                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                                                        <Zap className="h-4 w-4 text-primary-foreground" />
                                                            </div>
                                                            <span className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                                                                        EduFlow
                                                            </span>
                                                </Link>

                                                {/* Nav links — hidden on mobile */}
                                                <nav className="hidden md:flex items-center gap-8">
                                                            {["Features", "Courses", "Pricing"].map((item) => (
                                                                        <Link
                                                                                    key={item}
                                                                                    href={`#${item.toLowerCase()}`}
                                                                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                        >
                                                                                    {item}

                                                                        </Link>
                                                            ))}
                                                </nav>

                                                {/* Auth buttons */}
                                                <div className="flex items-center gap-3">
                                                            <ThemeToggle />
                                                            <Button variant="ghost" size="sm" asChild>
                                                                        <Link href="/login">Log in</Link>
                                                            </Button>
                                                            <Button size="sm" asChild>
                                                                        <Link href="/register">
                                                                                    Get started
                                                                                    <ChevronRight className="ml-1 h-3.5 w-3.5" />
                                                                        </Link>
                                                            </Button>
                                                </div>
                                    </div>
                        </header>
            );
}