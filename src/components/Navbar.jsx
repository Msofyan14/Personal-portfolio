import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../constans";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const [btnMode, setBtnMode] = useState(false);
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(darkQuery, "darkQuery");

  window.onscroll = function () {
    const header = document.querySelector("header");
    const topNav = header.offsetTop;

    if (window.pageYOffset > topNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        // console.log(event);
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };

  let domNode = useClickOutside(() => {
    setHamburger(false);
  });

  // Dark Mode
  const options = [
    {
      icon: "sunny",
      text: "light",
      selectText: "Light",
    },
    {
      icon: "moon",
      text: "dark",
      selectText: "Dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
      selectText: "System",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, element]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  // onWindowMatch();

  return (
    <header className="relative z-50 flex h-[80px] w-full items-center bg-transparent ">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="heading-gradient w-[156px] text-[32px] italic">
            <a href="/">YNZDEV</a>
          </div>
          <div ref={domNode} className="flex items-center px-4">
            <button
              onClick={() => setHamburger((prev) => !prev)}
              className={[
                "absolute right-4 block lg:hidden",
                hamburger ? "hamburger-active" : "",
              ].join(" ")}
              id="hamburger"
              name="hamburger"
              type="button"
            >
              <span className="hamburger-line dark: origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line dark: transition duration-300  ease-in-out"></span>
              <span className="hamburger-line dark: origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className={[
                "absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg  dark:bg-dark dark:shadow-slate-700 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:lg:bg-transparent",
                hamburger ? "" : "hidden",
              ].join(" ")}
            >
              <ul className=" block lg:flex">
                {navLinks.map((link) => (
                  <li
                    className="mx-8 flex py-2 text-base hover:text-sky-500 dark:text-white dark:hover:text-sky-500"
                    key={link.id}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}

                <li>
                  <div>
                    <div className="hidden lg:block lg:h-full lg:border-l">
                      {options?.map(
                        (opt) =>
                          theme === opt.text && (
                            <button
                              key={opt.text}
                              className={[
                                "ml-5 mt-2 text-xl",
                                theme === opt.text && "text-sky-600",
                              ].join(" ")}
                              onClick={() => setBtnMode((prev) => !prev)}
                            >
                              <ion-icon name={opt.icon}></ion-icon>
                            </button>
                          )
                      )}
                    </div>
                    <div
                      className={[
                        "lg:absolute lg:-right-14 lg:top-14  lg:w-[170px] lg:rounded-xl lg:bg-white lg:py-5 lg:shadow-lg",
                        btnMode ? "" : "lg:hidden",
                      ].join(" ")}
                    >
                      <ul
                        className="flex justify-center gap-6 lg:block"
                        onClick={() => setBtnMode((prev) => !prev)}
                      >
                        {options?.map((opt) => (
                          <li className="" key={opt.text}>
                            <div
                              className="block cursor-pointer items-center hover:rounded-lg  lg:flex lg:hover:rounded-none"
                              onClick={() => setTheme(opt.text)}
                            >
                              <button
                                className={`my-2 ml-4 h-8 w-8 rounded-full text-xl leading-9 ${
                                  theme === opt.text
                                    ? "text-sky-600"
                                    : "text-slate-500"
                                }`}
                              >
                                <ion-icon name={opt.icon}></ion-icon>
                              </button>
                              <p className="hidden lg:ml-4 lg:inline-block lg:cursor-pointer lg:text-base">
                                {opt.selectText}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
