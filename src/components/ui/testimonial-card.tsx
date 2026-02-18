"use client";

import * as React from "react";
import { useRef, useEffect } from "react";

import { Star, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Type Definitions ---
export interface Stat {
    value: string;
    label: string;
}

export interface Testimonial {
    name: string;
    title: string;
    quote?: string;
    avatarSrc: string;
    rating: number;
}

export interface ClientsSectionProps {
    tagLabel: string;
    title: string;
    description: string;
    stats: Stat[];
    testimonials: Testimonial[];
    primaryActionLabel: string;
    onPrimaryClick?: () => void;
    secondaryActionLabel: string;
    onSecondaryClick?: () => void;
    className?: string;
    id?: string;
}

// --- Counter helper ---
function animateCounter(el: HTMLElement, raw: string) {
    const num = parseInt(raw.replace(/[^\d]/g, ""));
    if (isNaN(num)) return;
    const prefix = raw.match(/^[^\d]*/)?.[0] ?? "";
    const suffix = raw.replace(/^[^\d]*\d+/, "");
    const obj = { val: 0 };
    gsap.to(obj, {
        val: num,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
            el.textContent = prefix + Math.floor(obj.val) + suffix;
        },
    });
}

// --- Sticky Testimonial Card ---
const StickyTestimonialCard = ({
    testimonial,
    index,
}: {
    testimonial: Testimonial;
    index: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%", // Trigger when top of card hits 85% of viewport height
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className="sticky w-full"
            style={{ top: `${20 + index * 24}px` }}
        >
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100 bg-white flex flex-col h-auto w-full transition-shadow duration-300 hover:shadow-xl">
                {/* Author */}
                <div className="flex items-center gap-4">
                    <div
                        className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0 bg-gray-200"
                        style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
                        aria-label={`Foto de ${testimonial.name}`}
                    />
                    <div className="flex-grow">
                        <p className="font-bold text-base text-gray-900">
                            {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 my-4">
                    <span className="font-bold text-sm text-gray-900">
                        {testimonial.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(testimonial.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Quote */}
                {testimonial.quote && (
                    <p className="text-sm leading-relaxed text-gray-600">
                        &ldquo;{testimonial.quote}&rdquo;
                    </p>
                )}
            </div>
        </div>
    );
};

// --- Main Component ---
export const ClientsSection = ({
    tagLabel,
    title,
    description,
    stats,
    testimonials,
    primaryActionLabel,
    onPrimaryClick,
    secondaryActionLabel,
    onSecondaryClick,
    className,
    id,
}: ClientsSectionProps) => {
    const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!statsRef.current) return;
        const counterEls = statsRef.current.querySelectorAll("[data-counter]");
        const ctx = gsap.context(() => {
            gsap.fromTo(
                counterEls,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse",
                        onEnter: () => {
                            counterEls.forEach((el) => {
                                const raw = el.getAttribute("data-target") ?? "";
                                animateCounter(el as HTMLElement, raw);
                            });
                        },
                        onEnterBack: () => {
                            counterEls.forEach((el) => {
                                const raw = el.getAttribute("data-target") ?? "";
                                animateCounter(el as HTMLElement, raw);
                            });
                        },
                        onLeave: () => {
                            counterEls.forEach((el) => {
                                (el as HTMLElement).textContent = "0";
                            });
                        },
                        onLeaveBack: () => {
                            counterEls.forEach((el) => {
                                (el as HTMLElement).textContent = "0";
                            });
                        },
                    },
                }
            );
        }, statsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id={id}
            className={`w-full py-20 md:py-28 ${className ?? ""}`}
            data-header-theme="light"
        >

            <div className="mx-auto max-w-5xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column: Sticky */}
                <div className="flex flex-col gap-5 lg:sticky lg:top-20">
                    {/* Tag — orange styled */}
                    <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#F39200]/30 bg-[#F39200]/5 px-3 py-1 text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-[#F39200] text-xs font-semibold">{tagLabel}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-gray-900 leading-tight">
                        {title}
                    </h2>
                    <p className="text-[0.9rem] leading-relaxed text-gray-500">
                        {description}
                    </p>

                    {/* Stats with counter animation */}
                    <div ref={statsRef} className="flex items-center justify-start gap-6 mt-4 py-4 border-y border-gray-100">
                        {stats.map((stat, i) => (
                            <React.Fragment key={stat.label}>
                                <div className="text-center">
                                    <p
                                        data-counter
                                        data-target={stat.value}
                                        className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight"
                                    >
                                        0
                                    </p>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-0.5">
                                        {stat.label}
                                    </p>
                                </div>
                                {i < stats.length - 1 && <div className="w-px h-8 bg-gray-200" />}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 mt-6">
                        {/* Outline button — same hover as primary */}
                        <button
                            onClick={onSecondaryClick}
                            className="group/btn relative overflow-hidden rounded-full border-2 border-[#F39200] bg-white px-6 h-11 text-[13px] font-semibold text-[#F39200] transition-all duration-500 hover:bg-[#FFAB2E] hover:border-[#FFAB2E] hover:text-white hover:shadow-xl hover:shadow-[#F39200]/30 cursor-pointer"
                        >
                            {/* Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />
                            <span className="relative z-10 flex items-center gap-2.5">
                                <PhoneCallIcon className="size-4" />
                                {secondaryActionLabel}
                            </span>
                        </button>

                        {/* Primary button — brighter on hover */}
                        <Button
                            onClick={onPrimaryClick}
                            className="group/btn relative overflow-hidden rounded-full border border-[#F39200] bg-[#F39200] px-6 h-11 text-[13px] font-bold text-white transition-all duration-500 hover:bg-[#FFAB2E] hover:border-[#FFAB2E] hover:shadow-xl hover:shadow-[#F39200]/30"
                        >
                            {/* Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />
                            <span className="relative z-10 flex items-center gap-2.5">
                                {primaryActionLabel}
                                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Right Column: Sticky card stack */}
                <div
                    id="testimonial-cards"
                    className="relative flex flex-col gap-4"
                    style={{ height: scrollContainerHeight }}
                >
                    {testimonials.map((testimonial, index) => (
                        <StickyTestimonialCard
                            key={testimonial.name}
                            index={index}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
