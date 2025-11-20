"use client";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/assets/bgs/about-us.png";
import MenuBar from "@/components/modules/menu-bar";
import Footer from "@/components/modules/footer";
import Logo from "@/components/ui/logo";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  tags: string[];
}

interface BlogPostLayoutProps {
  post: BlogPost;
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${heroBanner.src})` }}
        className="flex h-screen w-full flex-col justify-between bg-cover bg-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10"
      >
        {/* Header Navigation */}
        <header className="flex flex-row items-center justify-between">
          <Logo className="h-[5vh] origin-top-left scale-[-30%] rotate-180 pt-20 md:scale-[-10%]" />
          <div className="flex flex-1 flex-row items-center justify-end md:justify-center">
            <MenuBar />
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
          <div className="bg-opacity-50-black flex w-fit max-w-[90%] flex-row items-center justify-center rounded-sm p-4 text-center text-[24px] font-[700] sm:max-w-[80%] sm:p-6 sm:text-[32px] md:max-w-[75%] md:p-7 md:text-[40px] lg:max-w-[70%] lg:p-8 lg:text-[50px]">
            <span>{post.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="flex items-center gap-2 p-0 text-white hover:bg-transparent hover:text-blue-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <span>By {post.author}</span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{post.title}</h1>

          <p className="mb-8 text-xl leading-relaxed text-white/80">{post.excerpt}</p>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-white/20 text-white hover:border-white/30 hover:bg-white/10">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-12 aspect-video overflow-hidden rounded-lg">
          <Image src={post.image} alt={post.title} width={800} height={450} className="h-full w-full object-cover" />
        </div>

        {/* Article Content */}
        <article
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Written by {post.author}</h3>
              <p className="text-white/70">Expert insights on technology, development, and digital innovation.</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="border-white/20 text-white hover:border-white/30 hover:bg-white/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:border-white/30 hover:bg-white/10"
                >
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>

      <Footer />
    </div>
  );
}
