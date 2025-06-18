"use client";
import { FC, useState } from "react";
import TitleTag from "../TitleTag";
import Link from "next/link";
import { Button } from "../../ui/Button";
import { blogs } from "./blogs.constants";
import BlogCard from "./BlogCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface BlogNewsProps {}

const BlogNews: FC<BlogNewsProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full py-[60px] md:py-[100px] items-center bg-light px-4 md:px-0">
      <TitleTag title="Blog" description="Our Blog" />
      
      {/* Desktop Layout - All cards visible */}
      <div className="hidden md:flex w-full max-w-5xl justify-center gap-[40px]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Mobile Layout - Carousel with one full card and half of next */}
      <div className="md:hidden w-full max-w-sm mx-auto">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 85}%)` }}
          >
            {blogs.map((blog, index) => (
              <div key={blog.id} className="w-[85%] flex-shrink-0 pr-4">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Previous blog"
          >
            <FaChevronLeft className="w-4 h-4 text-primary" />
          </button>

          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Next blog"
          >
            <FaChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      <Link href="/blog">
        <Button
          variant="secondary"
          size="sm"
          className="border-text text-text font-raleway text-lg font-semibold"
        >
          View all
        </Button>
      </Link>
    </div>
  );
};

export default BlogNews;
