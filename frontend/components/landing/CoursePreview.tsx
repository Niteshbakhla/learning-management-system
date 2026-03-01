"use client"
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

const courses = [
            {
                        title: "Complete React Developer Bootcamp",
                        category: "Web Development",
                        lessons: 42,
                        duration: "18h",
                        level: "Intermediate",
                        color: "bg-blue-500",
            },
            {
                        title: "UI/UX Design Fundamentals",
                        category: "Design",
                        lessons: 28,
                        duration: "12h",
                        level: "Beginner",
                        color: "bg-violet-500",
            },
            {
                        title: "Node.js & Backend Architecture",
                        category: "Backend",
                        lessons: 55,
                        duration: "24h",
                        level: "Advanced",
                        color: "bg-cyan-500",
            },
];


export default function CoursePreview() {
            return (
                        <section id="courses" className="py-20 px-6">
                                    <div className="max-w-6xl mx-auto">
                                                <div className="flex items-end justify-between mb-12">
                                                            <div>
                                                                        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                                                                                    Popular courses
                                                                        </p>
                                                                        <h2
                                                                                    className="text-3xl sm:text-4xl font-bold text-foreground"
                                                                                    style={{ fontFamily: "var(--font-heading)" }}
                                                                        >
                                                                                    Start with what interests you
                                                                        </h2>
                                                            </div>
                                                            <Button variant="ghost" asChild className="hidden sm:flex">
                                                                        <Link href="/register" className="flex items-center gap-1">
                                                                                    View all <ArrowRight className="h-4 w-4" />
                                                                        </Link>
                                                            </Button>
                                                </div>

                                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {courses.map((course) => (
                                                                        <div
                                                                                    key={course.title}
                                                                                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                                                                        >
                                                                                    {/* Thumbnail placeholder */}
                                                                                    <div className={`h-40 ${course.color} relative flex items-center justify-center`}>
                                                                                                <BookOpen className="h-12 w-12 text-white/40" />
                                                                                                {/* Lock overlay — not logged in */}
                                                                                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                                            <div className="bg-white/90 rounded-lg px-4 py-2 text-sm font-medium text-foreground">
                                                                                                                        Sign up to access
                                                                                                            </div>
                                                                                                </div>
                                                                                    </div>

                                                                                    <div className="p-5">
                                                                                                <div className="flex items-center justify-between mb-3">
                                                                                                            <Badge variant="secondary" className="text-xs">
                                                                                                                        {course.category}
                                                                                                            </Badge>
                                                                                                            <Badge variant="outline" className="text-xs">
                                                                                                                        {course.level}
                                                                                                            </Badge>
                                                                                                </div>

                                                                                                <h3
                                                                                                            className="font-semibold text-foreground mb-3 leading-snug"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                                                                >
                                                                                                            {course.title}
                                                                                                </h3>

                                                                                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                                                                            <span className="flex items-center gap-1">
                                                                                                                        <BookOpen className="h-3.5 w-3.5" />
                                                                                                                        {course.lessons} lessons
                                                                                                            </span>
                                                                                                            <span className="flex items-center gap-1">
                                                                                                                        <Clock className="h-3.5 w-3.5" />
                                                                                                                        {course.duration}
                                                                                                            </span>
                                                                                                </div>
                                                                                    </div>
                                                                        </div>
                                                            ))}
                                                </div>
                                    </div>
                        </section>
            );
}