import {useEffect, useRef, useState} from "preact/hooks";
import type {Project} from "../data/Projects.ts";

const useFocus = (project: Project): [boolean, (value: boolean) => void, preact.RefObject<HTMLElement>] => {
  const [isFocus, setIsFocus] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);
  const setIsFocusHandler = (value: boolean) => {
    if (!value) {
      document.body.style.overflow = "";
      const url = new URL(window.location.href);
      url.searchParams.delete("project");
      history.pushState(null, "", url.toString());
    }
    setIsFocus(value)
  }
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
    updateFocusFromUrl();
  }, [project.slug]);

  useEffect(() => {
    if (isFocus && rootRef.current) {
      rootRef.current && rootRef.current.scrollIntoView({
        block: "center",
      });
      document.body.style.overflow = "hidden";
    }
  }, [isFocus]);

  return [isFocus, setIsFocusHandler, rootRef]
}

export default useFocus;
