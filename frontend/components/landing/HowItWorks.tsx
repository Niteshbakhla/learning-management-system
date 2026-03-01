"use client"

const steps = [
            {
                        number: "01",
                        title: "Create your account",
                        description: "Sign up free in under 30 seconds. No credit card required.",
            },
            {
                        number: "02",
                        title: "Enroll in a course",
                        description: "Browse our catalog and enroll in courses that match your goals.",
            },
            {
                        number: "03",
                        title: "Learn and get certified",
                        description: "Complete lessons, pass quizzes, and earn your certificate.",
            },
];

export default function HowItWorks() {
            return (
                        <section className="py-20 px-6">
                                    <div className="max-w-6xl mx-auto">
                                                <div className="mb-12">
                                                            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                                                                        Get started in minutes
                                                            </p>
                                                            <h2
                                                                        className="text-3xl sm:text-4xl font-bold text-foreground"
                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                            >
                                                                        How it works
                                                            </h2>
                                                </div>

                                                <div className="grid sm:grid-cols-3 gap-8">
                                                            {steps.map((step, index) => (
                                                                        <div key={step.number} className="relative">
                                                                                    {/* Connector line */}
                                                                                    {index < steps.length - 1 && (
                                                                                                <div className="hidden sm:block absolute top-6 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-border" />
                                                                                    )}

                                                                                    <div className="flex flex-col items-start gap-4">
                                                                                                {/* Step number */}
                                                                                                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
                                                                                                            style={{ fontFamily: "var(--font-heading)" }}>
                                                                                                            {step.number}
                                                                                                </div>

                                                                                                <div>
                                                                                                            <h3
                                                                                                                        className="text-lg font-semibold text-foreground mb-1"
                                                                                                                        style={{ fontFamily: "var(--font-heading)" }}
                                                                                                            >
                                                                                                                        {step.title}
                                                                                                            </h3>
                                                                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                                                                        {step.description}
                                                                                                            </p>
                                                                                                </div>
                                                                                    </div>
                                                                        </div>
                                                            ))}
                                                </div>
                                    </div>
                        </section>
            );
}