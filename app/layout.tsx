import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Unizenith - Your Path to Academic Excellence",
	description:
		"Unizenith is your ultimate destination for comprehensive test preparation, offering tailored courses and expert guidance to help you achieve your academic goals.",
	generator: "Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
