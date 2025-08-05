"use client";

import {
	CheckCircleIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonial(): JSX.Element {
	// Testimonial data array
	const testimonials = [
		{
			id: 1,
			name: "Priya Sharma",
			image: "/user.png",
			program: "AP Prep",
			score: "5/5",
			scoreLabel: "Perfect Score",
			quote:
				'" Taking the AP Test prep course here was a game-changer! The structured lessons, practice tests, and expert guidance helped me score a 5 in AP Calculus. I felt confident and fully prepared on exam day! "',
			achievement: "Early Admission to Harvard",
		},
		{
			id: 2,
			name: "Marcus Johnson",
			image: "/user.png",
			program: "SAT Prep",
			score: "1580/1600",
			scoreLabel: "Top 1% Score",
			quote:
				'" The personalized study plan and practice tests were incredible. I improved my score by 300 points! The instructors really understood my weaknesses and helped me turn them into strengths. "',
			achievement: "Full Scholarship to MIT",
		},
		{
			id: 3,
			name: "Sarah Chen",
			image: "/user.png",
			program: "ACT Prep",
			score: "36/36",
			scoreLabel: "Perfect Score",
			quote:
				'" I was struggling with the timing on the ACT, but the strategies I learned here completely changed my approach. The mock tests were so similar to the real thing! "',
			achievement: "Accepted to Stanford",
		},
		{
			id: 4,
			name: "David Rodriguez",
			image: "/user.png",
			program: "AP Prep",
			score: "5/5",
			scoreLabel: "Perfect Score",
			quote:
				'" The AP Chemistry course was challenging but so well-structured. The lab simulations and practice problems prepared me for every type of question on the exam. "',
			achievement: "Pre-Med at Johns Hopkins",
		},
		{
			id: 5,
			name: "Emma Thompson",
			image: "/user.png",
			program: "SAT Prep",
			score: "1560/1600",
			scoreLabel: "99th Percentile",
			quote:
				'" The writing section was my biggest challenge, but the feedback and revision techniques I learned here were amazing. I never thought I could improve so much! "',
			achievement: "Ivy League Bound",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	// Auto-advance carousel every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		setTimeout(() => setIsAnimating(false), 300);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
		setTimeout(() => setIsAnimating(false), 300);
	};

	const handleIndicatorClick = (index: number) => {
		if (isAnimating || index === currentIndex) return;
		setIsAnimating(true);
		setCurrentIndex(index);
		setTimeout(() => setIsAnimating(false), 300);
	};

	const currentTestimonial = testimonials[currentIndex];

	return (
		<section className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 relative bg-white bg-[linear-gradient(154deg,rgba(33,106,220,1)_0%,rgba(24,125,183,1)_37%,rgba(14,143,147,1)_73%)] min-h-screen">
<header className="flex flex-col items-center gap-3 sm:gap-4 relative w-full max-w-7xl mx-auto px-2 sm:px-4">
  <h1 className="w-full font-sans font-semibold text-neutral-50 text-2xl sm:text-3xl md:text-4xl text-center tracking-[0] leading-tight sm:leading-[normal] whitespace-normal break-words">
	Success Stories from Our Students
  </h1>
  <p className="w-full font-sans font-normal text-neutral-50 text-base sm:text-lg md:text-xl tracking-[0] leading-snug sm:leading-[normal] text-center max-w-full sm:max-w-2xl">
	Hear how our students turned their dreams into reality with the right guidance and preparation.
  </p>
</header>

			<div className="relative w-full max-w-7xl mx-auto overflow-visible">
				<Card
					className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[74px] px-2 xs:px-4 sm:px-8 md:px-12 lg:px-[60px] py-4 md:py-10 relative bg-[#6290c066] rounded-[20px] overflow-hidden border border-solid border-[#637e98] transition-all duration-300 ease-in-out ${
						isAnimating ? "opacity-90 scale-[0.98]" : "opacity-100 scale-100"
					}`}>
					<CardContent className="p-0 flex flex-col md:flex-row items-center gap-4 md:gap-[74px] w-full">
						<div className="inline-flex flex-col items-center gap-4 relative w-full max-w-xs md:max-w-[220px] mb-4 md:mb-0">
							<div className="relative w-[129px] h-[129px] rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-teal-400 p-1">
								<img
									className="relative w-full h-full object-cover rounded-full bg-white"
									alt={`Profile of ${currentTestimonial.name}`}
									src={currentTestimonial.image}
								/>
							</div>

							<div className="flex flex-col items-center gap-3 relative self-stretch w-full">
								<h2 className="relative w-fit mt-[-1.00px] font-sans font-semibold text-neutral-50 text-2xl text-center tracking-[0] leading-[normal]">
									{currentTestimonial.name}
								</h2>

								<Badge className="inline-flex items-center justify-center gap-2.5 px-6 py-2 relative bg-[#aef4e54c] rounded-[30px] hover:bg-[#aef4e54c] transition-all duration-200">
									<span className="relative w-fit mt-[-1.00px] font-sans font-semibold text-[#aef4e5] text-sm tracking-[0] leading-[normal]">
										{currentTestimonial.program}
									</span>
								</Badge>

								<p className="relative self-stretch font-sans font-semibold text-neutral-50 text-base text-center tracking-[0] leading-[normal]">
									Score: {currentTestimonial.score}
								</p>

								<p className="relative self-stretch font-sans font-semibold text-[#a0ecb2] text-base text-center tracking-[0] leading-[normal]">
									{currentTestimonial.scoreLabel}
								</p>
							</div>
						</div>

						<div className="flex flex-col w-full md:w-[522px] items-start gap-4 md:gap-6 relative">
							<div className="relative w-10 h-10">
								<img
									className="absolute w-[30px] h-[25px] top-[7px] left-[5px]"
									alt="Testimonial quote icon"
									src="/Layer_1.png"
								/>
							</div>

							<p className="relative self-stretch font-sans font-semibold text-neutral-50 text-base tracking-[0] leading-[normal]">
								{currentTestimonial.quote}
							</p>

							<div className="inline-flex items-center justify-center gap-2 relative">
								<CheckCircleIcon className="w-6 h-6 text-[#a0ecb2]" />

								<p className="relative w-fit font-sans font-semibold text-[#a0ecb2] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
									{currentTestimonial.achievement}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="inline-flex items-center gap-2 relative w-full max-w-7xl mx-auto justify-center">
				<Button
					variant="ghost"
					onClick={handlePrev}
					disabled={isAnimating}
					className="relative w-10 h-10 p-0 bg-[#3d617a] rounded-[20px] flex items-center justify-center hover:bg-[#4a7291] transition-all duration-200 disabled:opacity-50">
					<ChevronLeftIcon className="w-6 h-6 text-white" />
				</Button>

				{testimonials.map((_, index) => (
					<button
						key={`indicator-${index}`}
						onClick={() => handleIndicatorClick(index)}
						disabled={isAnimating}
						className={`relative w-3.5 h-3.5 rounded-[7px] transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed ${
							index === currentIndex
								? "bg-white shadow-lg"
								: "bg-[#688596] hover:bg-[#7a95a8]"
						}`}
					/>
				))}

				<Button
					variant="ghost"
					onClick={handleNext}
					disabled={isAnimating}
					className="relative w-10 h-10 p-0 bg-[#3d617a] rounded-[20px] flex items-center justify-center hover:bg-[#4a7291] transition-all duration-200 disabled:opacity-50">
					<ChevronRightIcon className="w-6 h-6 text-white" />
				</Button>
			</div>

			<div className="flex flex-col items-center gap-4 w-full max-w-7xl mx-auto">
				<p className="relative w-fit font-sans font-normal text-neutral-50 text-xl tracking-[0] leading-[normal] text-center">
					Ready to join our success stories?
				</p>

				<Button className="inline-flex items-center justify-center gap-2.5 px-8 py-4 relative bg-[#54b5a6] rounded-[10px] hover:bg-[#48a095] transition-all duration-200 hover:scale-105 hover:shadow-lg">
					<span className="relative w-fit mt-[-1.00px] font-sans font-medium text-[#fbfbfb] text-base tracking-[0] leading-[normal] whitespace-nowrap">
						Start Your Free Trial!
					</span>
				</Button>
			</div>
		</section>
	);
}
