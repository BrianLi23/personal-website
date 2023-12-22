import React from "react";

export default function Header() {
  return (
    <nav className="p-10 mb-12 flex justify-between">
      {darkMode ? (
        <Image src={"/websitelogo.png"} width={200} height={200} />
      ) : (
        <Image src={"/websitelogodark.png"} width={200} height={200} />
      )}
      <ul className="font-nexa flex items-center">
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <BsFillSunFill
              className="cursor-pointer text-2xl relative mb-20"
              color="white"
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl relative mb-20"
              color="rgb(51,65,85)"
            />
          )}
        </button>
        <li className="relative mb-20">
          <a
            className="bg-gradient-to-r from-slate-300 to-slate-400 text-white px-4 py-2 rounded-md ml-8"
            href="/BrianLiResume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
