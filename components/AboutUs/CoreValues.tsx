import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Lightbulb } from "lucide-react";

export default function CoreValues() {
	const values = [
		{
			icon: Target,
			title: "Personalised Learning",
			description:
				"Every student is unique. Our adaptive learning technology creates customized study plans that adapt to individual learning styles and pace.",
		},
		{
			icon: Heart,
			title: "Student-Centered Approach",
			description:
				"We put students first in everything we do, ensuring their success and well-being are at the heart of our platform and support services.",
		},
		{
			icon: Shield,
			title: "Quality & Excellence",
			description:
				"We maintain the highest standards in our content, technology, and instruction to deliver exceptional learning experiences.",
		},
		{
			icon: Lightbulb,
			title: "Innovation & Growth",
			description:
				"We continuously evolve our platform and methods, embracing new technologies and pedagogical approaches to enhance learning.",
		},
	];

	return (
		<section className="py-16 px-4 bg-[#fafafa]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-[#000000] mb-4">
						Our Core Values
					</h2>
					<p className="text-[#4b5563]">
						The Principles That Guide Our Commitment to Student Success
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{values.map((value, index) => {
						const IconComponent = value.icon;
						return (
							<Card
								key={index}
								className="bg-white border-0 shadow-lg transition-transform duration-200 hover:shadow-2xl hover:-translate-y-2">
								<CardContent className="p-6">
									<div className="w-12 h-12 bg-gradient-to-r from-[#3266e3] to-[#2563eb] rounded-lg flex items-center justify-center mb-4">
										<IconComponent className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-[#000000] mb-3">
										{value.title}
									</h3>
									<p className="text-[#4b5563] font-medium">
										{value.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
