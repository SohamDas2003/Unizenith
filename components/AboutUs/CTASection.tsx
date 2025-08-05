import { Button } from "@/components/ui/button";

export default function CTASection() {
	return (
		<section className="bg-figma-gradient from-[#3266e3] to-[#2563eb] text-white py-16 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-semibold mb-6">
					Ready to Start Your Journey?
				</h2>
				<p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
					Join thousands of successful students who have achieved their dream
					scores with TestPrep Pro
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button className="bg-white font-medium text-[#3266e3] hover:bg-gray-100 px-8 py-3 h-[52px] text-lg">
						Start Free Diagnostic Test
					</Button>
					<Button
						variant="outline"
						className="border-white font-medium text-white hover:bg-white hover:text-[#3266e3] px-8 py-3 bg-transparent h-[52px] text-lg">
						View Our Courses
					</Button>
				</div>
			</div>
		</section>
	);
}
