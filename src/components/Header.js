import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">tshmmnt_</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
