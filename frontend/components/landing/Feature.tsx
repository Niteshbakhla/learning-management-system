"use client"
import { Award, BarChart3, BookOpen } from "lucide-react";

const features = [
            {
                        icon: BookOpen,
                        title: "Structured Courses",
                        description:
                                    "Every course is broken into focused lessons with clear learning outcomes. No fluff, just progress.",
            },
            {
                        icon: BarChart3,
                        title: "Track Your Progress",
                        description:
                                    "Visual dashboards show exactly where you are and what's next. Stay motivated with every milestone.",
            },
            {
                        icon: Award,
                        title: "Earn Certificates",
                        description:
                                    "Complete courses and quizzes to earn certificates you can share on LinkedIn and your portfolio.",
            },
];


export default function Features() {
            return (
                        <section id="features" className="py-20 px-6">
                                    <div className="max-w-6xl mx-auto">
                                                {/* Section header */}
                                                <div className="mb-12">
                                                            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                                                                        Why EduFlow
                                                            </p>
                                                            <h2
                                                                        className="text-3xl sm:text-4xl font-bold text-foreground"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        Everything you need to succeed
                                                            </h2>
                                                </div>

                                                {/* Feature cards */}
                                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {features.map((feature) => {
                                                                        const Icon = feature.icon;
                                                                        return (
                                                                                    <div
                                                                                                key={feature.title}
                                                                                                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 group"
                                                                                    >
                                                                                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                                                                                            <Icon className="h-5 w-5 text-primary" />
                                                                                                </div>
                                                                                                <h3
                                                                                                            className="text-lg font-semibold text-foreground mb-2"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}
                                                                                                >
                                                                                                            {feature.title}
                                                                                                </h3>
                                                                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                                                                            {feature.description}
                                                                                                </p>
                                                                                    </div>
                                                                        );
                                                            })}
                                                </div>
                                    </div>
                        </section>
            );
}
