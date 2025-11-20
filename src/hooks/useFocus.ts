import {useEffect, useRef, useState} from "preact/hooks";
import type {Project} from "../data/Projects.ts";

const useFocus = (project: Project): [boolean, preact.RefObject<HTMLElement>] => {
  const [isFocus, setIsFocus] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  const updateFocusFromUrl = () => {
    const url = new URL(window.location.href);
    const selected = url.searchParams.get("project");

    setIsFocus(selected === project.slug);
  };

  useEffect(() => {
    const handler = () => updateFocusFromUrl();

    window.addEventListener("project-changed", handler);
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("project-changed", handler);
      window.removeEventListener("popstate", handler);
    };
  }, [project.slug]);

  useEffect(() => {
    console.log("run time")
    updateFocusFromUrl();
  }, [project.slug]);

  useEffect(() => {
    if (isFocus && rootRef.current) {
      setTimeout(() => {
        rootRef.current && rootRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 350)
    }
  }, [isFocus]);

  return [isFocus, rootRef]
}

export default useFocus;
