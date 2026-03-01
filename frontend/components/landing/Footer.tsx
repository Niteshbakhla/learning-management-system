"use client"

import {  Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
            return (
                        <footer className=" py-10 px-6 bg-muted/30">
                                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                                                {/* Logo */}
                                                <Link href="/" className="flex items-center gap-2">
                                                            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                                                                        <Zap className="h-3.5 w-3.5 text-primary-foreground" />
                                                            </div>
                                                            <span className="font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                                                                        EduFlow
                                                            </span>
                                                </Link>

                                                {/* Links */}
                                                <div className="flex items-center gap-6">
                                                            {["Privacy", "Terms", "Contact"].map((item) => (
                                                                        <Link
                                                                                    key={item}
                                                                                    href="#"
                                                                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                        >
                                                                                    {item}
                                                                        </Link>
                                                            ))}
                                                </div>

                                                <p className="text-xs text-muted-foreground">
                                                            © {new Date().getFullYear()} EduFlow. All rights reserved.
                                                </p>
                                    </div>
                        </footer>
            );
}