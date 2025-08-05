import InsightsFeaturedArticle from "@/components/Blog/InsightsFeaturedArticle";
import LatestArticles from "@/components/Blog/LatestArticles";
import StayUpdated from "@/components/Blog/StayUpdated";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-[#fafafa]">
			<Navbar />
			<InsightsFeaturedArticle />
			<LatestArticles />
			<StayUpdated />
			<Footer />
		</div>
	);
}
