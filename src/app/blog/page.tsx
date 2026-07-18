import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { RiCalendarLine } from "react-icons/ri";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import TitleTag from "@/components/HomeSections/TitleTag";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { blogs } from "@/components/HomeSections/BlogSection/blogs.constants";

export const metadata: Metadata = {
  title: "PraiseDev | Blog",
  description:
    "Practical articles on design, software development, mobile apps, Web3, and AI from PraiseDev.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PraiseDev Blog",
    description:
      "Insights on building useful, scalable, and modern digital products.",
    type: "website",
  },
};

const featuredBlog = blogs[0];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
          <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative px-6 py-20 lg:px-24 lg:py-28">
            <div className="mx-auto flex max-w-6xl flex-col gap-12">
              <div className="flex max-w-3xl flex-col gap-6">
                <TitleTag title="Blog" description="Ideas for better products" />
                <LargeHeading className="font-dmSerifDisplay text-4xl leading-tight text-text lg:text-6xl">
                  Practical thinking for modern digital products.
                </LargeHeading>
                <Paragraph className="max-w-2xl font-raleway text-lg leading-relaxed text-subText">
                  Notes on design, engineering, product strategy, and the
                  technologies shaping how useful software gets built.
                </Paragraph>
              </div>

              <Link
                href={`/blog#${featuredBlog.slug}`}
                className="group grid overflow-hidden rounded-lg border border-primary/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="relative min-h-[280px] overflow-hidden lg:min-h-[430px]">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-text">
                    Featured
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-6 p-6 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                    <span>{featuredBlog.category}</span>
                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <h2 className="font-dmSerifDisplay text-3xl leading-tight text-text lg:text-5xl">
                    {featuredBlog.title}
                  </h2>
                  <Paragraph className="font-raleway text-base leading-relaxed text-subText lg:text-lg">
                    {featuredBlog.excerpt}
                  </Paragraph>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-miniSubText">
                    <span>{featuredBlog.author}</span>
                    <span className="h-1 w-1 rounded-full bg-miniSubText/50" />
                    <span>{featuredBlog.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 font-raleway text-lg font-semibold text-primary">
                    Read article
                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-light/60 px-6 py-16 lg:px-24 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-raleway text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  All Articles
                </p>
                <h2 className="mt-3 font-dmSerifDisplay text-3xl text-text lg:text-4xl">
                  Read the latest from PraiseDev
                </h2>
              </div>
              <Paragraph className="max-w-xl font-raleway text-base leading-relaxed text-subText">
                Short, useful reads for teams and founders building digital
                products with taste, clarity, and technical depth.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog#${blog.slug}`}
                  className="group flex min-h-[430px] flex-col overflow-hidden rounded-lg border border-transparent bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-bg px-3 py-1 text-xs font-semibold text-primary">
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <h3 className="font-dmSerifDisplay text-2xl leading-tight text-text transition-colors group-hover:text-primary">
                      {blog.title}
                    </h3>
                    <Paragraph className="font-raleway text-sm leading-relaxed text-subText">
                      {blog.description}
                    </Paragraph>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs text-miniSubText">
                      <span className="inline-flex items-center gap-1">
                        <RiCalendarLine />
                        {blog.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiClock />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg px-6 py-16 lg:px-24 lg:py-24">
          <div className="mx-auto flex max-w-5xl flex-col gap-16">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                id={blog.slug}
                className="scroll-mt-28 border-b border-light pb-16 last:border-b-0 last:pb-0"
              >
                <div className="mb-8 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                    <span>{blog.category}</span>
                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="font-dmSerifDisplay text-4xl leading-tight text-text lg:text-5xl">
                    {blog.title}
                  </h2>
                  <Paragraph className="max-w-3xl font-raleway text-lg leading-relaxed text-subText">
                    {blog.excerpt}
                  </Paragraph>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-miniSubText">
                    <img
                      src={blog.authorImage}
                      alt={`${blog.author} headshot`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span>{blog.author}</span>
                    <span className="h-1 w-1 rounded-full bg-miniSubText/50" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[260px] w-full object-cover md:h-[420px]"
                  />
                </div>

                <div className="mt-10 flex max-w-3xl flex-col gap-10">
                  {blog.content.map((section) => (
                    <section key={section.heading} className="flex flex-col gap-4">
                      <h3 className="font-dmSerifDisplay text-2xl text-text lg:text-3xl">
                        {section.heading}
                      </h3>
                      {section.body.map((paragraph) => (
                        <Paragraph
                          key={paragraph}
                          className="font-raleway text-base leading-8 text-subText lg:text-lg"
                        >
                          {paragraph}
                        </Paragraph>
                      ))}
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
