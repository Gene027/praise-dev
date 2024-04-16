import { FC } from "react";
import TitleTag from "../TitleTag";
import Link from "next/link";
import { Button } from "../../ui/Button";
import { blogs } from "./blogs.constants";
import BlogCard from "./BlogCard";

interface BlogNewsProps {}

const BlogNews: FC<BlogNewsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-14 w-full py-[100px] items-center bg-light">
      <TitleTag title="Blog" description="Our Blog" />
      <div className="w-full flex max-w-5xl justify-center gap-[40px]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
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
