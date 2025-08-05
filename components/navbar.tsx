"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="bg-white border-b border-gray-200 z-50 relative">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<a className="text-2xl font-bold text-[#477fec]" href="/">UNIZENITH</a>
					</div>

					{/* Desktop Nav */}
					<nav className="hidden md:flex space-x-8">
						<a
							href="/"
							className="relative text-black hover:text-[#477fec] font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-[#477fec] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">
							Home
						</a>
						<a
							href="/about"
							className="relative text-black hover:text-[#477fec] font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-[#477fec] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">
							About Us
						</a>
						<a
							href="/test"
							className="relative text-black hover:text-[#477fec] font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-[#477fec] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">
							Tests
						</a>
						<a
							href="/blog"
							className="relative text-black hover:text-[#477fec] font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-[#477fec] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">
							Blog
						</a>
						<a
							href="/contact"
							className="relative text-black hover:text-[#477fec] font-medium transition-colors after:content-[''] after:block after:h-0.5 after:bg-[#477fec] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">
							Contact
						</a>
					</nav>

					{/* Desktop Buttons */}
					<div className="hidden md:flex items-center space-x-2">
						<Button
							variant="ghost"
							className="text-[#477fec]">
							Login
						</Button>
						<Button className="bg-figma-gradient text-white">Sign Up</Button>
					</div>

					{/* Hamburger Icon for Mobile (in Navbar) */}
					<button
						className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 bg-transparent border-none shadow-none p-0 focus:outline-none"
						aria-label="Open menu"
						onClick={() => setMenuOpen(!menuOpen)}>
						<span
							className={`block w-6 h-0.5 bg-[#477fec] transition-all duration-300 ${
								menuOpen ? "rotate-45 translate-y-1.5" : ""
							}`}></span>
						<span
							className={`block w-6 h-0.5 bg-[#477fec] my-1 transition-all duration-300 ${
								menuOpen ? "opacity-0" : ""
							}`}></span>
						<span
							className={`block w-6 h-0.5 bg-[#477fec] transition-all duration-300 ${
								menuOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}></span>
					</button>

					{/* Mobile Menu Overlay */}
					{menuOpen && (
						<div className="fixed inset-0 z-40 bg-black bg-opacity-40 flex justify-end md:hidden">
							<div className="w-3/4 max-w-xs bg-white h-full shadow-lg flex flex-col p-6 space-y-6 animate-slide-in">
								<button
									className="self-end mb-4 text-2xl text-gray-400 hover:text-[#477fec]"
									aria-label="Close menu"
									onClick={() => setMenuOpen(false)}>
									&times;
								</button>
								<a
									href="/"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									Home
								</a>
								<a
									href="/about"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									About Us
								</a>
								<a
									href="/test"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									Tests
								</a>
								<a
									href="/pricing"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									Pricing
								</a>
								<a
									href="/blog"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									Blog
								</a>
								<a
									href="/contact"
									className="text-lg font-medium text-black hover:text-[#477fec] transition-colors"
									onClick={() => setMenuOpen(false)}>
									Contact
								</a>
								<div className="flex flex-col gap-2 pt-4">
									<Button
										variant="ghost"
										className="text-[#477fec] w-full">
										Login
									</Button>
									<Button className="bg-figma-gradient text-white w-full">
										Sign Up
									</Button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			{/* Mobile menu slide-in animation */}
			<style jsx>{`
				@keyframes slide-in {
					from {
						transform: translateX(100%);
					}
					to {
						transform: translateX(0);
					}
				}
				.animate-slide-in {
					animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}
			`}</style>
		</header>
	);
}
