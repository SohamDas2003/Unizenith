import CoreValues from "@/components/AboutUs/CoreValues";
import CTASection from "@/components/AboutUs/CTASection";
import HeroMission from "@/components/AboutUs/HeroMission";
import Leadership from "@/components/AboutUs/Leadership";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Component() {
	return (
		<>
			<Navbar />
			<HeroMission />
			<CoreValues />
			<Leadership />
			<CTASection />
			<Footer />
		</>
	);
}
