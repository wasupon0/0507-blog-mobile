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
    <div className="sm:max-w-[500px] max-w-[400px]  md:max-w-[1000px] ml-auto mr-auto">
      <div className="ml-auto mr-auto md:flex">{blogMobile}</div>

      <p
        onClick={clickViewMore}
        className="mb-10 text-lg font-bold text-center capitalize cursor-pointer hover:underline"
      >
        view more
      </p>
    </div>
  ) : (
    <div className="sm:max-w-[500px] max-w-[400px]  md:max-w-[1000px] ml-auto mr-auto">
      <div className="grid-cols-3 ml-auto mr-auto md:grid">{blogElement}</div>
      <p
        onClick={clickViewMore}
        className="mb-10 text-lg font-bold text-center capitalize cursor-pointer hover:underline"
      >
        hide
      </p>
    </div>
  );
}
