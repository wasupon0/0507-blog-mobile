export default function About({}) {
  return (
    <div className="flex">
      <img src="/user.png" alt="" />
      <div className="flex flex-col">
        {" "}
        <h1>Hi there! My name is Name and welcome to my learning journal.</h1>
        <p>
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the online community to get
          expert code reviews of my Solo Projects projects and meet like-minded
          peers.
        </p>
      </div>
    </div>
  );
}
