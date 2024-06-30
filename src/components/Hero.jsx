export default function Hero() {
  return (
    <div
      className="w-full h-full pb-6 pl-5 pr-5 text-white "
      style={{
        backgroundImage: "url('/article-image-hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:max-w-[500px] max-w-[400px]  md:max-w-[1000px] ml-auto mr-auto">
        <div className="pt-20"></div>
        <div className="p-4 overflow-hidden rounded-3xl bg-opacity-5 bg-slate-900 backdrop-blur-md">
          <p className="mb-2 ">JULY 23, 2022</p>
          <h1 className="mb-2 text-3xl font-bold">
            My new journey as a <br />
            self taught developer.
          </h1>
          <p>
            After several months of learning in the Frontend Developer Career
            Path, I've made the big jump to start my own projects. I'm excited
            to share my solo projects projects in the form of blog articles.
          </p>
        </div>
      </div>
    </div>
  );
}
