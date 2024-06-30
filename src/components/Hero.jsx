export default function Hero() {
  return (
    <div
      className="w-full h-full pb-6 pl-5 pr-5 text-white"
      style={{
        backgroundImage: "url('/article-image-hero.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="pt-20 mb-2">JULY 23, 2022</p>
      <h1 className="mb-2 text-3xl font-bold">
        My new journey as a <br />
        self taught developer.
      </h1>
      <p>
        After several months of learning in the Frontend Developer Career Path,
        I've made the big jump to start my own projects. I'm excited to share my
        solo projects projects in the form of blog articles.
      </p>
    </div>
  );
}
