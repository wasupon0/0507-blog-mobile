import logo from "../assets/logo.svg";

export default function Nav() {
  return (
    <nav className="flex justify-between p-5">
      <div className="flex">
        <img className="w-6 h-6 mr-2" src={logo} alt="logo" />
        <h1 className="font-bold">My learning journal</h1>
      </div>
      <ul className="flex gap-10 font-bold">
        <li className="uppercase">Home</li>
        <li className="uppercase">ABOUT ME</li>
      </ul>
    </nav>
  );
}
