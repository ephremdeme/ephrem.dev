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
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          class=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-teal-500/50 dark:hover:ring-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            class="h-4 w-4 text-gray-800 dark:text-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
