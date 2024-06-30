import logo from "/logo.svg";

export default function Nav({ clickBack }) {
  return (
    <nav className="flex justify-between p-5">
      <div className="flex">
        <img className="w-6 h-6 mr-2 " src={logo} alt="logo" />
        <h1 className="font-bold font-['Roboto']">My learning journal</h1>
      </div>
      <ul className="flex gap-10 font-medium">
        <li
          onClick={clickBack}
          className="uppercase cursor-pointer hover:underline"
        >
          Home
        </li>
        {/* <li className="uppercase">ABOUT ME</li> */}
      </ul>
    </nav>
  );
}
