import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ title, link }) {
  const [isSelected, setIsSelected] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setIsSelected(asPath === link);
  }, [asPath, link]);

  return (
    <Link
      className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100"
      href={link}
    >
      <span
        className={`relative z-10 ${
          isSelected ? "text-teal-600" : "text-gray-600 dark:text-gray-50"
        }`}
      >
        {title}
      </span>
    </Link>
  );
}

export default NavLink;
