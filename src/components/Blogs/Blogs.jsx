import React from "react";
import Heading from "../Shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to chose perfect smartwatch",
    subtitle:
      "Capture stunning photos with your smartphone! Learn essential composition techniques, lighting tips, and editing tricks to elevate your mobile photography game.",
    published: "Jan 20, 2024 by Sarah Lee",
    img: img1,
  },
  {
    title: "Unleash the Power of Automation",
    subtitle:
      "Streamline your workflow and save precious time with automation tools. Explore popular options, discover practical use cases, and unlock a new level of efficiency in your daily tasks.",
    published: "Mar 5, 2024 by Alex Chen",
    img: img2,
  },
  {
    title: "Crafting the Perfect Cup of Coffee",
    subtitle:
      "Transform your mornings with barista-worthy coffee! Explore brewing methods, bean selection tips, and milk frothing techniques to create your ideal cup at home.",
    published: "Apr 1, 2024 by Michael Johnson",
    img: img3,
  },
];
const Blogs = () => {
  return (
    <div className="py-12">
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 justify-items-center">
          {BlogData.map((data) => (
            <div className="blog-post">
              <div className="overflow-hidden mb-2">
                <img
                  src={data.img}
                  alt="news images"
                  className="w-full h-[220px] aspect-ratio-square object-cover rounded-2xl hover:scale-105 duration-200"
                />
              </div>
              <div className="blog-post-content space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
