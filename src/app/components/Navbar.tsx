import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-200 sticky top-0 drop-shadow-xl z-10 p-4">
      <div className="  mx-auto flex justify-between flex-col sm:flex-row">
        <Link href="/">
          <img
            src="../../images/bird3.png"
            alt="a pic of elin"
            className="w-16 h-16  "
          ></img>
        </Link>
      </div>
    </nav>
  );
}
