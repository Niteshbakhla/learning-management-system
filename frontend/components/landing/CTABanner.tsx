"use client"
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTABanner() {
            return (
                        <section className="py-20 px-6">
                                    <div className="max-w-6xl mx-auto">
                                                <div className="bg-primary rounded-2xl px-8 py-14 text-center relative overflow-hidden">
                                                            {/* Background decoration */}
                                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                                                            <div className="relative">
                                                                        <div className="flex items-center justify-center gap-2 mb-4">
                                                                                    {[1, 2, 3].map((i) => (
                                                                                                <CheckCircle2 key={i} className="h-5 w-5 text-white/70" />
                                                                                    ))}
                                                                        </div>

                                                                        <h2
                                                                                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                                                                                    style={{ fontFamily: "var(--font-heading)" }}
                                                                        >
                                                                                    Ready to start learning?
                                                                        </h2>
                                                                        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                                                                                    Join 10,000+ learners already growing their skills on EduFlow.
                                                                                    It&apos;s free to get started.
                                                                        </p>

                                                                        <div className="flex flex-wrap gap-3 justify-center">
                                                                                    <Button
                                                                                                size="lg"
                                                                                                variant="secondary"
                                                                                                asChild
                                                                                                className="bg-white text-primary hover:bg-white/90"
                                                                                    >
                                                                                                <Link href="/register">
                                                                                                            Create free account
                                                                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                                                                </Link>
                                                                                    </Button>
                                                                                    <Button
                                                                                                size="lg"
                                                                                                variant="ghost"
                                                                                                asChild
                                                                                                className="text-white hover:bg-white/10 border border-white/20"
                                                                                    >
                                                                                                <Link href="/login">Sign in</Link>
                                                                                    </Button>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
}