import Link from "next/link";
import NavLink from "./NavLink";

export function NavBar() {
  return (
    <header className="text-gray-600 body-font backdrop-saturate-180 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-evenly  ">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-xl">Ephrem</span>
        </Link>
        <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5  dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 backdrop-saturate-180 backdrop-blur-md">
          {[
            { title: "Home", link: "/" },
            { title: "Skills", link: "/#skills" },
            { title: "Projects", link: "/#projects" },
            { title: "Blog", link: "http://blog.ephrem.dev" },
            { title: "Contact", link: "/#contact" },
          ].map(({ title, link }) => (
            <NavLink key={title} title={title} link={link} />
          ))}
        </div>
      </nav>
    </header>
  );
}
