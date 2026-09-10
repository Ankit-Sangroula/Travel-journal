import headerimage from "../assets/headerglobe.png";
export default function Header() {
  return (
    <div className="bg-red-400 justify-center flex items-center p-2 border-b-2 border-black rounded-t-lg">
      <img src={headerimage} alt="header" />
      <span className="text-white ml-4 text-xl font-mono">My Travel Journal</span>
    </div>
  );
}
