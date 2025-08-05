"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BarChart2, Mic, Globe } from "lucide-react";
import student from "/public/two-happy-students-with-backpacks-books-their-hands-smiling-camera.webp";
export default function TestbookFeatures() {
	const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
	return (
		<div className="bg-white py-12 md:py-16">
			<div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* Left Column - Features */}
					<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 sm:[&>*:nth-child(even)]:mt-16">
						{/* Card 1 */}
						<motion.div
							className="bg-[#EFF6FF] p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 border border-[#93c5fd] relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							onHoverStart={() => setHoveredFeature("Learn from the Best")}
							onHoverEnd={() => setHoveredFeature(null)}>
							<span className="block space-y-2">
								<div className="w-16 h-16 bg-[#3C82F6] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300">
									<BookOpen className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-lato font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
									Learn from the Best
								</h3>
								<p className="text-base font-lato text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300">
									Master subjects with engaging, simplified lessons from
									industry experts.
								</p>
							</span>
						</motion.div>

						{/* Card 2 */}
						<motion.div
							className="bg-[#EFFDF4] p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 border border-[#6ee7b7] relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							onHoverStart={() => setHoveredFeature("Detailed Score Analysis")}
							onHoverEnd={() => setHoveredFeature(null)}>
							<span className="block space-y-2">
								<div className="w-16 h-16 bg-[#22C55D] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300">
									<BarChart2 className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-lato font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
									Detailed Score Analysis
								</h3>
								<p className="text-base font-lato text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300">
									Get a comprehensive breakdown of your strengths & areas for
									improvement.
								</p>
							</span>
						</motion.div>

						{/* Card 3 */}
						<motion.div
							className="bg-[#FEF2F2] p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 border border-[#fca5a5] relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							onHoverStart={() => setHoveredFeature("Live Tests")}
							onHoverEnd={() => setHoveredFeature(null)}>
							<span className="block space-y-2">
								<div className="w-16 h-16 bg-[#EF4444] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300">
									<Mic className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-lato font-bold text-red-900 group-hover:text-red-700 transition-colors duration-300">
									Live Tests
								</h3>
								<p className="text-base font-lato text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300">
									Experience the thrill and pressure of real exam conditions.
								</p>
							</span>
						</motion.div>
						{/* Card 4 */}
						<motion.div
							className="bg-[#FAF5FF] p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 border border-[#c4b5fd] relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							onHoverStart={() => setHoveredFeature("Multilingual Support")}
							onHoverEnd={() => setHoveredFeature(null)}>
							<span className="block space-y-2">
								<div className="w-16 h-16 bg-[#A855F7] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300">
									<Globe className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-lato font-bold text-purple-900 group-hover:text-purple-700 transition-colors duration-300">
									Multilingual Support
								</h3>
								<p className="text-base font-lato text-gray-700 font-bold group-hover:text-gray-900 transition-colors duration-300">
									Choose your preferred language for a comfortable learning
									experience.
								</p>
							</span>
						</motion.div>
					</div>
					{/* Right column - CTA */}
					<div className="lg:col-span-5 space-y-8 text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center lg:justify-start">
							<Image
								src={student || "/placeholder.svg"}
								alt="Two happy students with backpacks and books in their hands smiling at the camera"
								className="rounded-2xl w-full h-auto"
								placeholder="blur"
								height={100}
								width={100}
							/>
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-2xl md:text-3xl lg:text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
							Why Choose <br />
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
								Unizenith?
							</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-lg text-gray-700 leading-relaxed">
							Join thousands of ambitious students preparing for competitive
							exams with us.
							<span className="font-semibold">
								{" "}
								Access expert-curated test series
							</span>{" "}
							and
							<span className="font-semibold">
								{" "}
								boost your scores with proven strategies
							</span>
							. Start your journey to exam success today!
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
}
