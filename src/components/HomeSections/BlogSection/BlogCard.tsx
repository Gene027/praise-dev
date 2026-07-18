import React from "react";
import { Blog } from "./blogs.constants";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCalendarLine } from "react-icons/ri";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { author, title, description, date, image, authorImage, slug, readTime } = blog;
  return (
    <Link
      href={`/blog#${slug}`}
      className="group flex flex-col flex-1 w-full rounded-lg bg-bg min-h-[500px] md:min-h-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] md:h-[232px] object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 w-full p-4 md:p-5 flex items-end">
          <div className="flex gap-2 bg-bg p-2 rounded-[100px] min-w-[140px] md:min-w-[161px] h-[32px] md:h-[36px] items-center">
            <img
              className="rounded-full w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
              src={authorImage}
              alt="Author image"
            />
            <p className="text-text text-sm md:text-base font-raleway font-medium">
              {author}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 z-20 mt-[-5px] p-4 md:p-5 rounded-lg flex flex-col gap-4 md:gap-5">
        <Paragraph className="font-dmSerifDisplay text-lg md:text-xl text-text group-hover:text-primary transition-colors duration-200">
          {title}
        </Paragraph>
        <Paragraph className="text-subText text-sm md:text-base font-raleway">
          {description}
        </Paragraph>
        <div className="flex flex-wrap gap-3 items-center text-subText">
          <div className="flex gap-2 items-center">
            <RiCalendarLine className="w-[14px] h-[14px]" />
            <Paragraph className="text-subText text-sm font-raleway">
              {date}
            </Paragraph>
          </div>
          <Paragraph className="text-subText text-sm font-raleway">
            {readTime}
          </Paragraph>
        </div>
        <div className="flex gap-1 items-center group mt-auto">
          <span className="text-primary group-hover:text-[#B03A26] font-raleway font-semibold text-lg md:text-xl">
            Read more
          </span>
          <FaArrowRightLong className="text-primary group-hover:text-[#B03A26] w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
