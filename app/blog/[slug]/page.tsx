
import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";

export default function BlogDetailPage() {
  // Main blog content sections
  const blogSections = [
    {
      title: "Lorem Lorem Lorem Lorem  Lorem Lorem",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      image: "/istockphoto-2153466859-2048x2048-photoroom-1.png",
    },
    {
      title: "Lorem Lorem Lorem Lorem  Lorem Lorem",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      image: "/istockphoto-1352553853-2048x2048-photoroom-1.png",
    },
  ];

  // Related blog posts data
  const relatedPosts = [
    {
      title: "Lorem Ipsum is simply dummy text of the are is printing dfdfdfsdfsdfsdfdsfdfsd",
      image: "/group.png",
      readTime: "5 Mins Read",
      date: "17 Jan, 2023",
    },

  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-start relative w-full">
        {/* Hero section with gradient background */}
        <section className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-center relative self-stretch w-full">
              {/* Header with gradient background */}
              <header className="flex flex-col h-[250px] sm:h-[300px] lg:h-[392px] items-center gap-4 sm:gap-6 px-4 sm:px-8 lg:px-[70px] py-6 sm:py-8 lg:py-10 relative self-stretch w-full bg-figma-gradient">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-3xl sm:text-4xl lg:text-6xl text-center tracking-[0] leading-tight lg:leading-[98px]">
                  Blogs Detail Page
                </h1>
                <p className="relative max-w-[922px] w-full px-4 [font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg text-center tracking-[0.18px] leading-relaxed lg:leading-[29px]">
                  Lorem Ipsum is simply dummy text printing .
                </p>
              </header>

              {/* Featured image that overlaps header - centered and responsive */}
              <div className="relative w-full flex justify-center -mt-[100px] sm:-mt-[200px] lg:-mt-[150px] mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 lg:px-0">
                <Card className="w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[1240px] h-[200px] sm:h-[350px] lg:h-[520px] overflow-hidden border-4 lg:border-[6px] border-solid">
                  <CardContent className="p-0 h-full">
                    <Image
                      className="w-full h-full object-cover"
                      alt="Group healthcare"
                      src="/group.png"
                      width={1240}
                      height={520}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Main content section with responsive two columns */}
          <section className="flex flex-col xl:flex-row items-start gap-8 xl:gap-[100px] p-8 sm:p-8 relative self-stretch max-w-7xl mx-auto">
            {/* Left column - Main blog content */}
            <div className="flex flex-col w-full xl:w-[699px] items-start gap-6 xl:gap-10 relative">
              <div className="flex flex-col items-start gap-6 xl:gap-10 relative self-stretch w-full">
                {blogSections.map((section, index) => (
                  <div
                    key={`section-${index}`}
                    className="flex flex-col items-start gap-6 xl:gap-10 relative self-stretch w-full"
                  >
                    <article className="relative w-full">
                      <div className="flex flex-col w-full items-start gap-4 relative">
                        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#151e2b] text-xl sm:text-2xl xl:text-[32px] tracking-[0] leading-tight xl:leading-[41.9px]">
                          {section.title}
                        </h2>
                        <p className="relative w-full [font-family:'Mulish',Helvetica] font-normal text-[#6c6c6c] text-sm sm:text-base tracking-[0.32px] leading-relaxed xl:leading-6 whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </article>

                    {/* Image for each section */}
                    <div className="relative self-stretch w-full h-[250px] sm:h-[300px] xl:h-[407px] bg-[#e1e1e1] rounded-[11px] overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Blog section image"
                        src={section.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Related posts (sidebar only on xl and up) */}
            <aside className="flex flex-col w-full xl:w-[412px] items-start gap-4 sm:gap-6 xl:gap-10 relative xl:sticky xl:top-4 xl:self-start mt-8 xl:mt-0">
              <h3 className="text-xl font-semibold text-black xl:hidden mb-2 sm:mb-4">
                Related Posts
              </h3>
              {relatedPosts.map((post, index) => (
                <div key={`related-post-${index}`} className="block group w-full">
                  <div className="flex flex-row gap-4 w-full items-center">
                    <div className="flex-shrink-0 w-[120px] h-24">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={120}
                        height={96}
                        className="w-[120px] h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <h4 className="text-base sm:text-md md:text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-tight">
                        {post.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mb-0">
                        <div className="bg-white text-black px-3 py-1 text-xs sm:text-sm font-semibold rounded">
                          <span>{post.readTime}</span>
                        </div>
                        <div className="bg-white text-black px-3 py-1 text-xs sm:text-sm font-semibold rounded">
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </aside>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
