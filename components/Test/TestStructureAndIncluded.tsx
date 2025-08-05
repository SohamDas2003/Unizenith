import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function TestStructureAndIncluded() {
	return (
		<>
			{/* Test Structure Section */}
			<div className="container mx-auto px-6 py-16">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-semibold mb-4">Test Structure</h2>
					<p className="text-lg text-[#343434]">
						Understanding each section to maximise your score
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					<Card className="border-[#e6e7eb]">
						<CardHeader>
							<CardTitle className="text-xl text-[#343434]">
								Evidence-Based Reading and Writing
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Time:</span>
								<span className="text-[#3266e3] font-semibold">64 minutes</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Questions:</span>
								<span className="text-[#3266e3] font-semibold">
									52 questions
								</span>
							</div>
						</CardContent>
					</Card>
					<Card className="border-[#e6e7eb]">
						<CardHeader>
							<CardTitle className="text-xl text-[#343434]">
								Math ( No Calculator)
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Time:</span>
								<span className="text-[#3266e3] font-semibold">25 minutes</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Questions:</span>
								<span className="text-[#3266e3] font-semibold">
									20 questions
								</span>
							</div>
						</CardContent>
					</Card>
					<Card className="border-[#e6e7eb]">
						<CardHeader>
							<CardTitle className="text-xl text-[#343434]">
								Evidence-Based Reading and Writing
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Time:</span>
								<span className="text-[#3266e3] font-semibold">55 minutes</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#65858f] font-medium">Questions:</span>
								<span className="text-[#3266e3] font-semibold">
									38 questions
								</span>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			{/* What's Included Section */}
			<div className="bg-[#f9fafb] py-16">
				<div className="container mx-auto px-6">
					<div className="text-center mb-6">
						<h2 className="text-4xl font-bold mb-4">What's Included</h2>
						<p className="text-lg text-[#343434]">
							Comprehensive preparation tools for SAT success
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">Comprehensive practice tests</span>
						</div>
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">Personalized study plans</span>
						</div>
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">Expert video explanations</span>
						</div>
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">Performance analytics</span>
						</div>
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">College admission guidance</span>
						</div>
						<div className="flex items-center gap-3">
							<span
								className="flex items-center justify-center w-8 h-8 rounded-full"
								style={{ backgroundColor: "#E2FBE9" }}>
								<Icon
									icon="dashicons:yes"
									className="w-5 h-5"
									color="#4CA054"
								/>
							</span>
							<span className="font-medium">Essay writing support</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
