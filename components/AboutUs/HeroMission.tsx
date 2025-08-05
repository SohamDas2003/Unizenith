import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Clock, Award } from "lucide-react";

export default function HeroMission() {
	return (
		<>
			{" "}
			{/* Hero Section */}
			<section className="bg-figma-gradient text-white py-16 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-semibold mb-6">
						About Test Prep Pro
					</h1>
					<p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
						Flexible options designed to fit your needs and budget. Start your
						journey to test success today.
					</p>
				</div>
			</section>
			{/* Our Mission Section */}
			<section className="py-16 px-4">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-start">
						<div>
							<h2 className="text-3xl font-semibold text-[#000000] mb-6">
								Our Mission
							</h2>
							<div className="space-y-4 text-[#343434]">
								<p>
									At Test Prep Pro, our mission is to empower students with the
									knowledge, tools, and confidence they need to excel in
									competitive exams like the AP, SAT, GRE, and more. We aim to
									make high-quality test preparation accessible, personalized,
									and effective—helping learners unlock their full potential and
									achieve their academic and career goals.
								</p>
								<p>
									At Test Prep Pro, our mission is to empower students with the
									knowledge, tools, and confidence they need to excel in
									competitive exams like the AP, SAT, GRE, and more.
								</p>
							</div>

							<div className="mt-8 bg-[#f0f6fe] p-6 rounded-lg">
								<h3 className="font-semibold text-[#000000] mb-4">
									What Makes Us Different
								</h3>
								<ul className="space-y-2 text-[#343434] font-medium">
									<li>
										• AI- powered adaptive learning that adjusts your pace
									</li>
									<li>
										• AI- powered adaptive learning that adjusts your pace
									</li>
									<li>
										• AI- powered adaptive learning that adjusts your pace
									</li>
									<li>
										• AI- powered adaptive learning that adjusts your pace
									</li>
								</ul>
							</div>
						</div>

						<div>
							<Card className="bg-figma-gradient text-white">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold mb-8 text-center">
										Our Impact
									</h3>
									<div className="grid grid-cols-2 gap-6">
										<div className="text-center">
											<Users
												className="w-8 h-8 mx-auto mb-2"
												style={{ color: "#AEF4E5" }}
											/>
											<div className="text-3xl font-bold">50,000+</div>
											<div className="text-sm opacity-80">
												Students Prepared
											</div>
										</div>
										<div className="text-center">
											<Target
												className="w-8 h-8 mx-auto mb-2"
												style={{ color: "#AEF4E5" }}
											/>
											<div className="text-3xl font-bold">95%</div>
											<div className="text-sm opacity-80">Success Rate</div>
										</div>
										<div className="text-center">
											<Clock
												className="w-8 h-8 mx-auto mb-2"
												style={{ color: "#AEF4E5" }}
											/>
											<div className="text-3xl font-bold">15+</div>
											<div className="text-sm opacity-80">Years Experience</div>
										</div>
										<div className="text-center">
											<Award
												className="w-8 h-8 mx-auto mb-2"
												style={{ color: "#AEF4E5" }}
											/>
											<div className="text-3xl font-bold">100+</div>
											<div className="text-sm opacity-80">
												Expert Instructors
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
