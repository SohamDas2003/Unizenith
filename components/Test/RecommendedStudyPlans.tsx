import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function RecommendedStudyPlans() {
	return (
		<div className="container mx-auto px-6 py-16">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-semibold mb-4">Recommended Study Plans</h2>
				<p className="text-lg text-[#343434]">
					Choose the timeline that fits your schedule and goals
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8">
				<Card className="border-[#C4DBFB] bg-[#F0F6FE]">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl text-[#233C85] font-bold">
							Beginner
						</CardTitle>
						<CardDescription className="text-[#2652D0] font-medium">
							3-6 months intensive preparation
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#2652D0] rounded-full"></div>
							<span className="text-[#2652D0] font-medium">
								Foundation building
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#2652D0] rounded-full"></div>
							<span className="text-[#2652D0] font-medium">
								Concept mastery
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#2652D0] rounded-full"></div>
							<span className="text-[#2652D0] font-medium">
								Regular practice tests
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#2652D0] rounded-full"></div>
							<span className="text-[#2652D0] font-medium">
								Gradual skill development
							</span>
						</div>
					</CardContent>
				</Card>
				<Card className="border-[#C8F5D3] bg-[#f3fdf5]">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl text-[#285231] font-bold">
							Beginner
						</CardTitle>
						<CardDescription className="text-[#3C7E44] font-medium">
							3-6 months intensive preparation
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#3C7E44] rounded-full"></div>
							<span className="text-[#3C7E44] font-medium">
								Foundation building
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#3C7E44] rounded-full"></div>
							<span className="text-[#3C7E44] font-medium">
								Concept mastery
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#3C7E44] rounded-full"></div>
							<span className="text-[#3C7E44] font-medium">
								Regular practice tests
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#3C7E44] rounded-full"></div>
							<span className="text-[#3C7E44] font-medium">
								Gradual skill development
							</span>
						</div>
					</CardContent>
				</Card>
				<Card className="border-[#E6D7FC] bg-[#f9f6fe]">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl text-[#622da2] font-bold">
							Beginner
						</CardTitle>
						<CardDescription className="text-[#622da2] font-medium">
							3-6 months intensive preparation
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#622da2] rounded-full"></div>
							<span className="text-[#622da2] font-medium">
								Foundation building
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#622da2] rounded-full"></div>
							<span className="text-[#622da2] font-medium">
								Concept mastery
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#622da2] rounded-full"></div>
							<span className="text-[#622da2] font-medium">
								Regular practice tests
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#622da2] rounded-full"></div>
							<span className="text-[#622da2] font-medium">
								Gradual skill development
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
