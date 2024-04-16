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
  const { author, title, description, date, image, authorImage } = blog;
  return (
    <div className="flex flex-col flex-1 w-[283px] rounded-lg bg-bg">
      <div className="relative w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[232px] object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 w-full p-5 flex items-end">
          <div className="flex gap-2 bg-bg p-2 rounded-[100px] min-w-[161px] h-[36px] items-center">
            <img
              className="rounded-full w-[28px] h-[28px]"
              src={authorImage}
              alt="Author image"
            />
            <p className="text-text text-base font-raleway font-medium">
              {author}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[249px] z-20 mt-[-5px] p-5 rounded-lg flex flex-col gap-5">
        <Paragraph className="font-dmSerifDisplay text-xl text-text">
          {title}
        </Paragraph>
        <Paragraph className="text-subText text-base font-raleway">
          {description}
        </Paragraph>
        <div className="flex gap-2">
          <RiCalendarLine className="w-[14px] h-[14px]" />
          <Paragraph className="text-subText text-sm font-raleway">
            {date}
          </Paragraph>
        </div>
        <Link href={"/blog"} className="flex gap-1 items-center group">
          <span className=" text-primary group-hover:text-[#B03A26] font-raleway font-semibold text-xl">
            Read more
          </span>
          <FaArrowRightLong className="text-primary group-hover:text-[#B03A26] w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
