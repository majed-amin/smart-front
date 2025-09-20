import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
    id: string | number;
    name: string;
    role?: string;
    message: string;
    avatar?: string;
}

export interface TestimonialLoopProps {
    testimonials: Testimonial[];
    speed?: number; // pixels per second
    direction?: "left" | "right";
    gap?: number;
    cardWidth?: number;
    pauseOnHover?: boolean;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2,
};

const cx = (...parts: Array<string | false | null | undefined>) =>
    parts.filter(Boolean).join(" ");

const useResizeObserver = (
    callback: () => void,
    elements: Array<React.RefObject<Element | null>>,
    dependencies: React.DependencyList
) => {
    useEffect(() => {
        if (!window.ResizeObserver) {
            const handleResize = () => callback();
            window.addEventListener("resize", handleResize);
            callback();
            return () => window.removeEventListener("resize", handleResize);
        }

        const observers = elements.map((ref) => {
            if (!ref.current) return null;
            const observer = new ResizeObserver(callback);
            observer.observe(ref.current);
            return observer;
        });

        callback();

        return () => observers.forEach((observer) => observer?.disconnect());
    }, dependencies);
};

const useAnimationLoop = (
    trackRef: React.RefObject<HTMLDivElement | null>,
    targetVelocity: number,
    seqWidth: number,
    isHovered: boolean,
    pauseOnHover: boolean
) => {
    const rafRef = useRef<number | null>(null);
    const lastTimestampRef = useRef<number | null>(null);
    const offsetRef = useRef(0);
    const velocityRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track || seqWidth === 0) return;

        const animate = (timestamp: number) => {
            if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
            const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;

            const target = pauseOnHover && isHovered ? 0 : targetVelocity;
            const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocityRef.current += (target - velocityRef.current) * easingFactor;

            // Seamless looping logic
            let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
            nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
            offsetRef.current = nextOffset;

            track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            lastTimestampRef.current = null;
        };
    }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

const TestimonialLoop: React.FC<TestimonialLoopProps> = ({
                                                             testimonials,
                                                             speed = 120,
                                                             direction = "left",
                                                             gap = 32,
                                                             cardWidth = 726,
                                                             pauseOnHover = true,
                                                             fadeOut = false,
                                                             fadeOutColor,
                                                             scaleOnHover = false,
                                                             className,
                                                             style,
                                                         }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLDivElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
        const magnitude = Math.abs(speed);
        const dirMultiplier = direction === "left" ? 1 : -1;
        return magnitude * dirMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const firstSeqWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;

        if (firstSeqWidth > 0) {
            setSeqWidth(firstSeqWidth);
            const copiesNeeded = Math.ceil(containerWidth / firstSeqWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
            setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [testimonials, gap, cardWidth]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const renderCard = useCallback(
        (testimonial: Testimonial, key: React.Key) => (
            <div
                key={key}
                className={cx("flex-none", scaleOnHover && "transition-transform group-hover/item:scale-110")}
                style={{ marginRight: gap, width: cardWidth }}
            >
                <TestimonialCard testimonial={testimonial} />
            </div>
        ),
        [gap, cardWidth, scaleOnHover]
    );

    const testimonialLists = useMemo(
        () =>
            Array.from({ length: copyCount }, (_, copyIndex) => (
                <div
                    className="flex items-stretch"
                    key={`copy-${copyIndex}`}
                    ref={copyIndex === 0 ? seqRef : undefined}
                >
                    {testimonials.map((t, index) => renderCard(t, `${copyIndex}-${index}`))}
                </div>
            )),
        [copyCount, testimonials, renderCard]
    );

    const handleMouseEnter = () => pauseOnHover && setIsHovered(true);
    const handleMouseLeave = () => pauseOnHover && setIsHovered(false);

    return (
        <div
            ref={containerRef}
            className={cx("relative overflow-hidden w-full group", className)}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {fadeOut && (
                <>
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-[1]"
                        style={{
                            width: "80px",
                            background: `linear-gradient(to right, ${fadeOutColor ?? "#fff"}, rgba(255,255,255,0))`,
                        }}
                    />
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-[1]"
                        style={{
                            width: "80px",
                            background: `linear-gradient(to left, ${fadeOutColor ?? "#fff"}, rgba(255,255,255,0))`,
                        }}
                    />
                </>
            )}

            <div
                className="flex w-max will-change-transform select-none"
                ref={trackRef}
            >
                {testimonialLists}
            </div>
        </div>
    );
};

export default TestimonialLoop;
