import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Users } from "lucide-react";

export default function Courses() {
	return (
		<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Hero Section */}
			<div className="text-center mb-12 mt-12">
				<h2 className="text-4xl font-bold text-[#000000] mb-4">
					Choose Your Test Preparation
				</h2>
				<p className="text-lg max-w-2xl text-[#343434] mx-auto">
					Select from a range of expert-curated test prep options tailored to
					your academic and career goals
				</p>
			</div>

			{/* Test Cards Grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				{/* SAT Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-blue p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">SAT</h3>
								<p className="font-sans">Scholastic Assessment Test</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>

				{/* GRE Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-green p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">GRE</h3>
								<p className="font-sans">Graduate Record Examination</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>

				{/* GMAT Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-purple p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">GMAT</h3>
								<p className="font-sans">Graduate Management Admission Test</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>

				{/* AP Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-orange p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">AP</h3>
								<p className="font-sans">Advanced Placement</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>

				{/* IELTS Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-teal p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">IELTS</h3>
								<p className="font-sans">International English Language Testing System</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>

				{/* TOEFL Card */}
			   <Card className="overflow-hidden min-h-[175px] h-full flex flex-col">
				   <div className="bg-gradient-orange2 p-6 text-white flex-1 flex flex-col justify-center">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="text-2xl font-bold mt-4">TOEFL</h3>
								<p className="font-sans">Test of English as a Foreign Language</p>
							</div>
							<BookOpen className="w-10 h-10 mt-5" />
						</div>
					</div>
				</Card>
			</div>
		</main>
	);
}
