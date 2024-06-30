export default function Card({ image, date, title, content, clickBlog }) {
  return (
    <div className="flex flex-col px-5 py-8">
      <img
        onClick={clickBlog}
        className="h-[200px] object-cover cursor-pointer rounded-3xl hover:opacity-95"
        src={image}
        alt=""
      />
      <p className="mt-3 mb-2 ">{date}</p>
      <h1
        onClick={clickBlog}
        className="mb-2 text-3xl font-bold cursor-pointer hover:underline"
      >
        {title}
      </h1>
      <p>{content.intro}</p>
    </div>
  );
}
