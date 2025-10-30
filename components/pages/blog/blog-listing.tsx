"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "ai-transformation-business",
    title: "AI Transformation: How Artificial Intelligence is Revolutionizing Business Operations",
    excerpt:
      "Discover how AI technologies are reshaping business processes, from automation to predictive analytics, and learn practical strategies for implementation.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: "mobile-app-development-trends",
    title: "Mobile App Development Trends 2024: What Every Business Should Know",
    excerpt:
      "Explore the latest trends in mobile app development including cross-platform solutions, AI integration, and user experience innovations.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Mobile Development",
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: "web-development-best-practices",
    title: "Web Development Best Practices: Building Scalable and Secure Applications",
    excerpt:
      "Learn essential web development practices for creating robust, scalable applications that deliver exceptional user experiences.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Web Development",
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: "ui-ux-design-principles",
    title: "UI/UX Design Principles: Creating Intuitive Digital Experiences",
    excerpt:
      "Master the fundamental principles of UI/UX design to create user-centered digital products that drive engagement and conversion.",
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Design",
    image: "https://picsum.photos/200?random=4",
  },
  {
    id: "startup-tech-stack-guide",
    title: "The Complete Tech Stack Guide for Modern Startups",
    excerpt:
      "Navigate the complex world of technology choices with our comprehensive guide to building the perfect tech stack for your startup.",
    date: "2023-12-28",
    readTime: "12 min read",
    category: "Startups",
    image: "https://picsum.photos/200?random=5",
  },
];

export default function BlogListing() {
  return (
    <div className="w-full">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Latest Insights</h2>
        <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
          Stay ahead of the curve with our expert insights on technology trends, development best practices, and
          industry innovations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={225}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center gap-4 text-sm text-white/60">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">{post.category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
                {post.title}
              </h3>

              <p className="mb-4 line-clamp-3 text-white/70">{post.excerpt}</p>

              <Link href={`/blog/${post.id}`}>
                <Button
                  variant="ghost"
                  className="group/btn flex items-center gap-2 p-0 text-white hover:bg-transparent hover:text-blue-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" className="border-white/20 text-white hover:border-white/30 hover:bg-white/10">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}
