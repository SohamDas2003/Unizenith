import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LeadershipAndCTA() {
	const teamMembers = [
		{
			name: "David Rodriguez",
			role: "Founder & CEO",
			description:
				"Former Harvard admission officer with 20+ years in education. Passionate about making quality test prep accessible to all students.",
		},
		{
			name: "Riya Mehta",
			role: "Head of Curriculum",
			description:
				"Former Google engineer specializing in machine learning and educational technology. Drives our AI- powered adaptive learning platform.",
		},
		{
			name: "David Rodriguez",
			role: "CTO",
			description:
				"Former Google engineer specializing in machine learning and educational technology. Drives our AI- powered adaptive learning platform.",
		},
	];

	return (
		<>
			{/* Leadership Team Section */}
			<section className="py-16 px-4 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-[#000000] mb-4">
							Meet Our Leadership Team
						</h2>
						<p className="text-[#4b5563]">
							The Experts Behind Your Success Story
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="text-center">
								<div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
									<Image
										src="/placeholder.svg?height=128&width=128"
										alt={member.name}
										width={128}
										height={128}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold text-[#000000] mb-1">
									{member.name}
								</h3>
								<p className="text-[#3266e3] font-medium mb-3">{member.role}</p>
								<p className="text-[#4b5563] text-sm font-medium">
									{member.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
