import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Target, Users, Award, Calendar } from "lucide-react";

export default function SatPreparation() {
	return (
		<div className="bg-figma-gradient text-white min-h-[60vh] flex items-center justify-center py-8">
			<div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-center lg:items-stretch h-full lg:h-[unset] px-6">
				{/* Left Section */}
				<div className="flex-1 flex flex-col justify-center gap-8 w-full max-w-2xl">
					<div className="space-y-4">
						<h1 className="text-4xl sm:text-5xl font-bold">SAT Preparation</h1>
						<p className="text-lg sm:text-xl text-blue-100 font-medium">
							Scholastic Assessment Test
						</p>
						<p className="text-base sm:text-lg font-medium leading-relaxed">
							The SAT is a standard test widely used for college admissions in
							the United States.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-start">
							<div className="flex items-center gap-3 mb-2">
								<Clock
									className="w-5 h-5 text-blue-200"
									style={{ color: "#85E7D5" }}
								/>
								<span className="text-blue-200 font-medium text-sm">
									Duration
								</span>
							</div>
							<p className="text-2xl font-medium">3 hours</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-start">
							<div className="flex items-center gap-3 mb-2">
								<Target
									className="w-5 h-5"
									style={{ color: "#85E7D5" }}
								/>
								<span className="font-medium text-sm">Max Score</span>
							</div>
							<p className="text-2xl font-medium">1600</p>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 mt-2">
						<Button className="bg-[#40B7A4] hover:bg-[#3c7e44] text-white px-8 h-[44px] text-lg rounded-xl w-full sm:w-auto">
							Start Free Diagnostic
						</Button>
						<Button
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-[#3266e3] px-8 h-[44px] text-lg bg-transparent rounded-xl w-full sm:w-auto">
							View Study Plans
						</Button>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex-1 flex items-stretch justify-center w-full">
					<Card className="bg-white/15 backdrop-blur-sm border-white/20 text-white max-w-xl w-full flex flex-col justify-center h-full p-8">
						<CardHeader className="mb-4 p-0">
							<CardTitle className="text-3xl font-bold">
								Test Overview
							</CardTitle>
						</CardHeader>
						<CardContent className="flex-1 flex flex-col justify-center gap-8 p-0">
							<p className="text-blue-50 leading-relaxed font-medium text-lg">
								The SAT is designed to assess a student's readiness for college
								and is used by most colleges with a common data point to compare
								all applicants.
							</p>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-3">
									<Users
										className="w-7 h-7"
										style={{ color: "#85E7D5" }}
									/>
									<span className="text-base lg:text-lg font-medium">
										Taken by millions of students worldwide
									</span>
								</div>
								<div className="flex items-center gap-3">
									<Award
										className="w-7 h-7"
										style={{ color: "#85E7D5" }}
									/>
									<span className="text-base lg:text-lg font-medium">
										Accepted by thousands of institutions
									</span>
								</div>
								<div className="flex items-center gap-3">
									<Calendar
										className="w-7 h-7"
										style={{ color: "#85E7D5" }}
									/>
									<span className="text-base lg:text-lg font-medium">
										Available year-round
									</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
