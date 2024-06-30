import { useState } from "react";
import blogData from "../blogData";
import Card from "./Card";

export default function Blog({ clickBlog }) {
  const [isBlogMobile, setIsBlogMobile] = useState(true);

  const blogElement = blogData.map((blog) => {
    return (
      <Card
        key={blog.id}
        image={blog.image}
        date={blog.date}
        title={blog.title}
        content={blog.content}
        clickBlog={() =>
          clickBlog(blog.id, blog.image, blog.date, blog.title, blog.content)
        }
      />
    );
  });

  const blogMobile = blogData.slice(0, 3).map((blog) => {
    return (
      <Card
        key={blog.id}
        image={blog.image}
        date={blog.date}
        title={blog.title}
        content={blog.content}
        clickBlog={() =>
          clickBlog(blog.id, blog.image, blog.date, blog.title, blog.content)
        }
      />
    );
  });

  function clickViewMore() {
    setIsBlogMobile((prev) => !prev);
  }

  return isBlogMobile ? (
    <>
      {blogMobile}

      <p
        onClick={clickViewMore}
        className="mb-10 text-lg font-bold text-center capitalize cursor-pointer hover:underline"
      >
        view more
      </p>
    </>
  ) : (
    <>
      {blogElement}
      <p
        onClick={clickViewMore}
        className="mb-10 text-lg font-bold text-center capitalize cursor-pointer hover:underline"
      >
        hide
      </p>
    </>
  );
}
