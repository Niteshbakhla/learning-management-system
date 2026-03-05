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
                        <section className="pt-36 pb-24 px-6 relative overflow-hidden">
                                    {/* Background glow */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

                                    <div className="max-w-6xl mx-auto relative">
                                                <div className="max-w-4xl">
                                                            {/* Eyebrow badge */}
                                                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-medium mb-8">
                                                                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                                                        Now with AI-powered learning paths
                                                            </div>

                                                            {/* Headline */}
                                                            <h1
                                                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-8"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        Learn faster.
                                                                        <br />
                                                                        <span className="text-primary">Grow further.</span>
                                                            </h1>

                                                            {/* Subtext */}
                                                            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                                                                        EduFlow gives you structured courses, progress tracking, and
                                                                        certificates — everything you need to build real skills.
                                                            </p>

                                                            {/* CTAs */}
                                                            <div className="flex flex-wrap gap-4 mb-16">
                                                                        <Button size="lg" className="h-12 px-7 text-base" asChild>
                                                                                    <Link href="/register">
                                                                                                Start learning free
                                                                                                <ArrowRight className="ml-2 h-5 w-5" />
                                                                                    </Link>
                                                                        </Button>
                                                                        <Button size="lg" variant="outline" className="h-12 px-7 text-base" asChild>
                                                                                    <Link href="#courses" className="flex items-center gap-2">
                                                                                                <Play className="h-5 w-5 fill-current" />
                                                                                                Browse courses
                                                                                    </Link>
                                                                        </Button>
                                                            </div>

                                                            {/* Social proof */}
                                                            <div className="flex flex-wrap items-center gap-10">
                                                                        {stats.map((stat) => (
                                                                                    <div key={stat.label}>
                                                                                                <p
                                                                                                            className="text-3xl font-bold text-foreground"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                                                                >
                                                                                                            {stat.value}
                                                                                                </p>
                                                                                                <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
                                                                                    </div>
                                                                        ))}
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
}