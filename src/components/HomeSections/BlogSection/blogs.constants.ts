export interface Blog {
  id: string;
  author: string;
  title: string;
  description: string;
  date: string;
  image: string;
  authorImage: string;
}

export const blogs: Blog[] = [
  {
    id: "01",
    author: "Praise Anosike",
    title: "The Power of User-Centered Design",
    description:
      "Discover how a user-centered approach to design can elevate your digital presence and create meaningful connections.",
    date: "June 10, 2021",
    image: "/homepage/blog/blog1.png",
    authorImage: '/homepage/testimonials/testimonial4.png'
  },
  {
    id: "02",
    author: "Praise Anosike",
    title: "Web 3.0: The Future of the Internet",
    description:
      "Explore exciting world of web 3.0, where blockchain technology and decentralized apps are reshaping the internet",
    date: "June 10, 2021",
    image: "/homepage/blog/blog2.png",
    authorImage: '/homepage/testimonials/testimonial4.png'
  },
  {
    id: "03",
    author: "Praise Anosike",
    title: "Mobile Apps: From Idea to Launch.",
    description:
      "Learn the essential steps to turn your app idea into reality and successfully launch it in today’s competitive app market.",
    date: "June 10, 2021",
    image: "/homepage/blog/blog3.png",
    authorImage: '/homepage/testimonials/testimonial4.png'
  },
];
