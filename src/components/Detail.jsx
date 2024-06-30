export default function Detail({ id, image, date, title, content }) {
  return (
    <>
      <div
        className="w-full h-full pb-6 pl-5 pr-5 text-white"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-20"></div>
        <div className="p-4 sm:max-w-[500px] max-w-[400px]  md:max-w-[1000px] ml-auto mr-auto overflow-hidden text-center rounded-3xl bg-opacity-55 bg-slate-900 backdrop-blur-md">
          <p className="mb-2 ">{date}</p>
          <h1 className="text-3xl font-bold ">{title}</h1>
        </div>
      </div>
      <div className="sm:max-w-[500px] max-w-[400px]  md:max-w-[1000px] ml-auto mr-auto">
        <div className="p-5">
          <div className="flex justify-center">
            <p className="w-2/3 p-5 italic font-bold text-slate-500">
              <span className="-mb-10 text-6xl text-left -ml-14 line-clamp-1">
                “{" "}
              </span>
              {content.intro}
              <span className="-mt-6 -mr-10 text-6xl text-right line-clamp-1">
                ” &nbsp;
              </span>
            </p>
          </div>

          <br />
          <h2 className="mb-2 font-bold">{content.part1.question}</h2>
          <p>{content.part1.answer}</p>
          <br />

          <h2 className="mb-2 font-bold">{content.part2.question}</h2>
          <p>{content.part2.answer}</p>
        </div>
      </div>
    </>
  );
}
