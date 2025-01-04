"use client";

import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollFixer() {
  const [closeScrollFixer, setCloseScrollFixer] = useState<boolean | string>(
    "loading"
  );

  const mains = [
    "danke-seb",
    "championship-stats",
    "general-stats",
    "teams",
    "best-races",
    "ending",
  ];

  const [position, setPosition] = useState<string>("top");

  useEffect(() => {
    if (typeof window !== undefined) {
      const closeScrollFixer = localStorage.getItem("closeScrollFixer");
      if (closeScrollFixer) setCloseScrollFixer(JSON.parse(closeScrollFixer));
      else setCloseScrollFixer(false);
    }
  }, []);

  useEffect(() => {
    if (!closeScrollFixer) {
      if (typeof window !== undefined) {
        window.onhashchange = () => {
          if (window.location.hash === "#danke-seb") setPosition("top");
          else if (window.location.hash === "#ending") setPosition("bottom");
          else setPosition("neutral");
        };
      }
    }
  }, [setPosition, closeScrollFixer]);

  useEffect(() => {
    if (!closeScrollFixer || closeScrollFixer !== "loading") {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 767) {
          let activeMain = window.location.hash
            ? mains.find(
                (main) => main === window.location.hash.replace("#", "")
              )
              ? mains.indexOf(window.location.hash.replace("#", ""))
              : window.location.hash.replace("#", "").includes("grand-prix")
              ? mains.indexOf("best-races")
              : mains.indexOf("teams")
            : 0;

          let activeSub = window.location.hash
            ? mains.find(
                (main) => main === window.location.hash.replace("#", "")
              )
              ? 0
              : Array(document.getElementById(mains[activeMain])?.children)
                  .map((e: any) => {
                    e.id;
                  })
                  //@ts-ignore
                  .indexOf(window.location.hash.replace("#", ""))
            : 0;
          let lastScrollTop = 0;
          let isScrolling = false;
          if (closeScrollFixer || closeScrollFixer === "loading") return;
          window.onscroll = (e) => {
            if (!isScrolling) {
              if (window.scrollY > lastScrollTop) {
                if (activeMain === mains.indexOf("ending")) return;
                if (
                  activeMain !== mains.indexOf("teams") &&
                  activeMain !== mains.indexOf("best-races")
                ) {
                  isScrolling = true;
                  activeMain++;
                  window.location.hash = mains[activeMain];
                  setTimeout(() => {
                    isScrolling = false;
                  }, 800);
                } else {
                  isScrolling = true;
                  const el = document.getElementById(mains[activeMain]);
                  if (
                    el?.children.length &&
                    activeSub + 1 >= el?.children.length
                  ) {
                    activeMain++;
                    activeSub = 0;
                    isScrolling = true;
                    window.location.hash = mains[activeMain];
                  } else {
                    activeSub++;
                    window.location.hash = `${el?.children[activeSub].id}`;
                    isScrolling = true;
                  }

                  if (activeMain === mains.indexOf("ending")) {
                    setCloseScrollFixer(true);
                    localStorage.setItem("closeScrollFixer", "true");
                  }

                  setTimeout(() => {
                    isScrolling = false;
                  }, 800);
                }
              } else {
                if (activeMain === mains.indexOf("danke-seb")) return;
                else if (
                  activeMain !== mains.indexOf("teams") &&
                  activeMain !== mains.indexOf("best-races")
                ) {
                  isScrolling = true;
                  activeMain--;
                  window.location.hash = mains[activeMain];
                  setTimeout(() => {
                    isScrolling = false;
                  }, 800);
                } else {
                  isScrolling = true;
                  const el = document.getElementById(mains[activeMain]);
                  if (el?.children.length && activeSub === 0) {
                    if (activeMain === mains.indexOf("teams")) {
                      activeMain--;
                      isScrolling = true;
                      window.location.hash = mains[activeMain];
                    } else {
                      activeMain--;
                      let newEl: any = document.getElementById(
                        mains[activeMain]
                      );
                      activeSub = newEl?.children.length - 1;
                      window.location.hash = `${newEl?.children[activeSub].id}`;
                      isScrolling = true;
                    }
                  } else {
                    activeSub--;
                    window.location.hash = `${el?.children[activeSub].id}`;
                    isScrolling = true;
                  }
                  setTimeout(() => {
                    isScrolling = false;
                  }, 800);
                }
              }
            }
            lastScrollTop = window.scrollY;
          };
        }
      }
    }

    return () => {
      window.onscroll = null;
    };
  }, [closeScrollFixer]);

  return (
    <>
      {!closeScrollFixer && position !== "top" && (
        <button
          onClick={() => window.scrollTo(0, window.scrollY - 50)}
          className="max-md:hidden fixed top-10 left-[50%] translate-x-[-50%] rounded-full z-50 p-1.5 bg-indigo-500/50 focus:bg-indigo-600/70 hover:bg-indigo-600/70 text-base duration-150"
        >
          <FaAngleDoubleUp />
        </button>
      )}

      <div className="flex flex-col-reverse gap-2 items-center fixed bottom-10 left-[50%] translate-x-[-50%]">
        {!closeScrollFixer && position !== "bottom" && (
          <button
            onClick={() => window.scrollTo(0, window.scrollY + 50)}
            className="max-md:hidden rounded-full z-50 p-1.5 bg-indigo-500/50 focus:bg-indigo-600/70 hover:bg-indigo-600/70 text-base duration-150"
          >
            <FaAngleDoubleDown />
          </button>
        )}

        <button
          onClick={() => {
            setCloseScrollFixer(!closeScrollFixer);
            localStorage.setItem(
              "closeScrollFixer",
              JSON.stringify(!closeScrollFixer)
            );
            window.location.reload();
          }}
          className="max-md:hidden font-medium rounded-full z-50 p-1 px-2 bg-indigo-600 text-base "
        >
          {closeScrollFixer ? "Enable" : "Disable"} Scroll Help
        </button>
      </div>
    </>
  );
}
