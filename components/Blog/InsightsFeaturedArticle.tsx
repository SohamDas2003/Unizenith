import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function InsightsFeaturedArticle() {
	return (
		<>
			{/* Hero Section */}
			<div className="bg-figma-gradient text-white py-16 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Test Prep Insights & Tips
					</h1>
					<p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
						Explore expert strategies, time-saving tips, and study resources to
						help you prepare smarter and score higher on your exams.
					</p>
				</div>
			</div>
			<div className="max-w-6xl mx-auto px-4 py-12">
				<div className="text-center mb-8">
					<Badge
						variant="outline"
						className="text-[#2563eb] border-[#2563eb] mb-4">
						Featured Article
					</Badge>
				</div>
				<Card className="overflow-hidden bg-[#ffffff] shadow-lg">
					<CardContent className="p-0">
						<div className="grid md:grid-cols-2 gap-0">
							<div className="relative">
								<Image
									src="/math.png"
									alt="Mathematical equations"
									width={400}
									height={300}
									className="w-full h-full object-cover"
								/>
								<Badge className="absolute top-4 left-4 bg-[#2563eb] text-white">
									SAT Prep
								</Badge>
							</div>
							<div className="p-8 flex flex-col justify-center">
								<h2 className="text-2xl md:text-3xl font-bold text-[#000000] mb-4">
									Complete SAT Math Strategy Guide for 2024
								</h2>
								<p className="text-[#6b7280] mb-6 leading-relaxed">
									Master every SAT math topic with our comprehensive guide,
									including practice problems, timing strategies, and common
									mistake patterns.
								</p>
								<div className="flex items-center gap-4 mb-6 text-sm text-[#6b7280]">
									<div className="flex items-center gap-1">
										<User className="w-4 h-4" />
										<span>Dr. Sarah Mitchell</span>
									</div>
								</div>
								<Button className="bg-[#2563eb] hover:bg-[#1e40af] text-white w-fit">
									Read Full Article
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
