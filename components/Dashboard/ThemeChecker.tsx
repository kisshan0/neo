"use client";

import themeAtom, { themeAtomCallback } from "@/atoms/theme.atom";
import { useAtom } from "jotai";
import { useEffect } from "react";

function ThemeChecker() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [themeCallback, setThemeCallback] = useAtom(themeAtomCallback);

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
        console.log(localStorage.getItem("theme"))
      setTheme((theme) => {
        return { fromLocalStorage: true, dark: true };
      });
    } else {
      setTheme({ fromLocalStorage: true, dark: false });
    }
  }, []);

  return <></>;
}

export default ThemeChecker;
