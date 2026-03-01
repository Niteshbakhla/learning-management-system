"use client"

import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const stats = [
            { value: "10k+", label: "Active Learners" },
            { value: "200+", label: "Courses" },
            { value: "50+", label: "Expert Instructors" },
            { value: "95%", label: "Completion Rate" },
];


export default function Hero() {
            return (
                        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                                    {/* Background glow */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

                                    <div className="max-w-6xl mx-auto relative">
                                                <div className="max-w-3xl">
                                                            {/* Eyebrow badge */}
                                                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                                                                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                                                        Now with AI-powered learning paths
                                                            </div>

                                                            {/* Headline */}
                                                            <h1
                                                                        className="text-5xl sm:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        Learn faster.
                                                                        <br />
                                                                        <span className="text-primary">Grow further.</span>
                                                            </h1>

                                                            {/* Subtext */}
                                                            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                                                                        EduFlow gives you structured courses, progress tracking, and
                                                                        certificates — everything you need to build real skills.
                                                            </p>

                                                            {/* CTAs */}
                                                            <div className="flex flex-wrap gap-3 mb-12">
                                                                        <Button size="lg" asChild>
                                                                                    <Link href="/register">
                                                                                                Start learning free
                                                                                                <ArrowRight className="ml-2 h-4 w-4" />
                                                                                    </Link>
                                                                        </Button>
                                                                        <Button size="lg" variant="outline" asChild>
                                                                                    <Link href="#courses" className="flex items-center gap-2">
                                                                                                <Play className="h-4 w-4 fill-current" />
                                                                                                Browse courses
                                                                                    </Link>
                                                                        </Button>
                                                            </div>

                                                            {/* Social proof */}
                                                            <div className="flex flex-wrap items-center gap-6">
                                                                        {stats.map((stat) => (
                                                                                    <div key={stat.label}>
                                                                                                <p
                                                                                                            className="text-2xl font-bold text-foreground"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                                                                >
                                                                                                            {stat.value}
                                                                                                </p>
                                                                                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                                                                                    </div>
                                                                        ))}
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
}
