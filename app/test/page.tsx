import SatPreparation from "@/components/Test/SatPreparation";
import TestStructureAndIncluded from "@/components/Test/TestStructureAndIncluded";
import RecommendedStudyPlans from "@/components/Test/RecommendedStudyPlans";
import Navbar from "@/components/navbar";
import CTASection from "@/components/AboutUs/CTASection";
import Footer from "@/components/footer";

export default function TestPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<SatPreparation />
			<TestStructureAndIncluded />
			<RecommendedStudyPlans />
			<CTASection />
			<Footer />
		</div>
	);
}
