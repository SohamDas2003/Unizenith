"use client";
import Link from "next/link";
import { BookOpen, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-400 py-12 lg:py-16">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
					<div className="col-span-1 md:col-span-2 lg:col-span-1">
						<Link href="/" className="flex items-center space-x-3 mb-4">
							<div className="w-9 h-9 bg-slate-700 rounded-xl flex items-center justify-center">
								<BookOpen className="w-5 h-5 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-white">Unizenith</h1>
								<p className="text-xs text-gray-500">Excellence in Education</p>
							</div>
						</Link>
						<p className="text-sm text-gray-400 leading-relaxed">
							Comprehensive test preparation platform for ambitious students
							aiming for top scores.
						</p>
					</div>
					{/* Navigation Links */}
					<div>
						<h3 className="text-sm font-semibold text-white mb-4">
							Quick Links
						</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link href="/" className="hover:text-white transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="hover:text-white transition-colors">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="hover:text-white transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/refund-policy"
									className="hover:text-white transition-colors">
									Refund Policy
								</Link>
							</li>
							<li>
								<Link
									href="/disclaimer"
									className="hover:text-white transition-colors">
									Disclaimer
								</Link>
							</li>
						</ul>
					</div>
					{/* Test Categories Links */}
					<div>
						<h3 className="text-sm font-semibold text-white mb-4">Test Prep</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="/tests/sat"
									className="hover:text-white transition-colors">
									SAT Prep
								</Link>
							</li>
							<li>
								<Link
									href="/tests/gre"
									className="hover:text-white transition-colors">
									GRE Prep
								</Link>
							</li>
							<li>
								<Link
									href="/tests/gmat"
									className="hover:text-white transition-colors">
									GMAT Prep
								</Link>
							</li>
							<li>
								<Link
									href="/tests/ielts"
									className="hover:text-white transition-colors">
									IELTS Prep
								</Link>
							</li>
							<li>
								<Link
									href="/tests/ap"
									className="hover:text-white transition-colors">
									AP Exams Prep
								</Link>
							</li>
						</ul>
					</div>
					{/* Contact & Social */}
					<div>
						<h3 className="text-sm font-semibold text-white mb-4">
							Get in Touch
						</h3>
						<p className="text-sm text-gray-400 mb-4">
							Have questions? We&apos;re here to help.
						</p>
						<Link
							href="/contact"
							className="inline-block bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors" // Adjusted button colors
						>
							Contact Us
						</Link>
						{/* Social Links */}
						<div className="mt-6">
							<h3 className="text-sm font-semibold text-white mb-3">
								Follow Us
							</h3>
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									<Facebook className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									<Twitter className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									<Instagram className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Copyright */}
				<div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Unizenith. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
