import Blog from "./components/Blog";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

import { useEffect, useState } from "react";

export default function App() {
  const [isDetailBlog, setIsDetailBlog] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({});

  function clickBlog(id, image, date, title, content) {
    console.log(`blogID:${id}`);

    setIsDetailBlog(true);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setCurrentBlog({
      id,
      image,
      date,
      title,
      content,
    });
  }

  function clickBack() {
    setIsDetailBlog(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Nav clickBack={clickBack} />
      {isDetailBlog ? (
        <>
          {currentBlog.id !== 0 && (
            <>
              <Detail
                id={currentBlog.id}
                image={currentBlog.image}
                date={currentBlog.date}
                title={currentBlog.title}
                content={currentBlog.content}
              />

              <p className="mt-10 text-lg font-bold text-center capitalize ">
                recent posts
              </p>
              <Blog clickBlog={clickBlog} />
              <p
                onClick={clickBack}
                className="mb-10 text-lg font-bold text-center capitalize cursor-pointer hover:underline"
              >
                back
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <Hero />
          <Blog clickBlog={clickBlog} />
        </>
      )}

      <Footer />
    </>
  );
}
