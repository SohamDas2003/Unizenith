import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StayUpdated() {
	return (
		<div className="bg-figma-gradient text-white py-16 px-4">
			<div className="max-w-2xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
				<p className="text-lg opacity-90 mb-8">
					Get the latest test prep tips and strategies delivered to your inbox
					weekly.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
					<Input
						type="email"
						placeholder="Enter your email"
						className="bg-[#ffffff] text-[#000000] border-0 flex-1"
					/>
					<Button className="bg-[#ffffff] text-[#2563eb] hover:bg-[#f9fafb]">
						Subscribe
					</Button>
				</div>
				<p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime</p>
			</div>
		</div>
	);
}
