import Navbar from "@/components/navbar";
import Courses from "@/components/Home/courses";
import Testimonial from "@/components/Home/testimonial";
import Footer from "@/components/footer";
import Banner from "@/components/Home/Banner";
import TestbookFeatures from "@/components/Home/TestbookFeatures";

export default function Component() {
	return (
		<div className="min-h-screen bg-[#f9fafb]">
			<Navbar />
			<Banner />
			<Courses />
			<TestbookFeatures />
			<Testimonial />
			<Footer />
		</div>
	);
}
