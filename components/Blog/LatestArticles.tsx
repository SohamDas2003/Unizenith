import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Clock } from "lucide-react";

const filterTabs = [
	"All",
	"SAT Prep",
	"GRE Prep",
	"GMAT Prep",
	"IELTS Prep",
	"Study Tips",
];

import Link from "next/link";

const articles = [
	{
		slug: "gre-verbal-mastering-reading-comprehension",
		category: "SAT Prep",
		title: "GRE Verbal: Mastering Reading Comprehension",
		description:
			"Proven strategies to tackle the most challenging GRE verbal questions and improve your reading speed.",
		author: "Dr. Sarah Mitchell",
		readTime: "8 min read",
		date: "December 12, 2024",
	},
	// ...add more articles as needed
];

export default function LatestArticles() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-[#000000] mb-2">
					Latest Articles
				</h2>
				<p className="text-[#6b7280]">
					Everything you need to know about our pricing and plans
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-2 mb-12">
				{filterTabs.map((tab, index) => (
					<Button
						key={tab}
						variant={index === 0 ? "default" : "outline"}
						className={
							index === 0
								? "bg-[#2563eb] hover:bg-[#1e40af] text-white"
								: "text-[#6b7280] border-[#cccbcb]"
						}>
						{tab}
					</Button>
				))}
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{articles.map((article, index) => (
					<Card
						key={index}
						className="overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-md transition-shadow">
						<CardContent className="p-0">
							<div className="relative">
								<Image
									src="/math.png"
									alt="Article image"
									width={300}
									height={200}
									className="w-full h-48 object-cover"
								/>
								<Badge className="absolute top-4 left-4 bg-[#2563eb] text-white">
									{article.category}
								</Badge>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-[#000000] mb-2">
									{article.title}
								</h3>
								<p className="text-[#6b7280] text-sm mb-4 leading-relaxed">
									{article.description}
								</p>
								<div className="flex items-center justify-between text-xs text-[#6b7280] mb-4">
									<div className="flex items-center gap-1">
										<User className="w-3 h-3" />
										<span>{article.author}</span>
									</div>
									<div className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										<span>{article.readTime}</span>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-xs text-[#6b7280]">{article.date}</span>
									<Link
										href={`/blog/${article.slug}`}
										passHref
										legacyBehavior>
										<Button
											asChild
											variant="link"
											className="text-[#2563eb] p-0 h-auto text-sm">
											<a>Read More →</a>
										</Button>
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="text-center">
				<Button
					variant="outline"
					className="text-[#2563eb] border-[#2563eb] bg-transparent">
					Load More Article
				</Button>
			</div>
		</div>
	);
}
