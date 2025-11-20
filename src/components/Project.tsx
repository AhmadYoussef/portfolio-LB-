import type {FunctionalComponent} from "preact";
import type {Project} from "../data/Projects.ts";
import HorizontalDragScroll from "./HorizontalDragScroll";
import RandomImage from "../assets/random.png";
import "../styles/project.css"
import useFocus from "../hooks/useFocus.ts";

interface Props {
  project: Project;
}

const ProjectItem: FunctionalComponent<Props> = ({project}) => {
  const [isFocus, rootRef] = useFocus(project);

  const handleClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.slug);
    history.pushState(null, "", url.toString());

    window.dispatchEvent(new Event("project-changed"));
  };

  return (
    <HorizontalDragScroll containerRef={rootRef}
                          isFocus={isFocus}
                          onClick={handleClick}>
      <div class="left">
        <div class="projLogo"/>
        <h3>{project.title}</h3>
        <div class="city">City</div>
      </div>
      <div class="right">
        {/* Note: in React/Preact, use <img>, not astro:assets <Image> */}
        <img
          src={RandomImage.src}
          alt="Residential architecture category"
          class="project-image"
        />
      </div>
      {isFocus && <>
        <div className="left">
          <div className="projLogo"/>
          <h3>{project.title}</h3>
          <div className="city">City</div>
        </div>
        <div className="right">
          {/* Note: in React/Preact, use <img>, not astro:assets <Image> */}
          <img
            src={RandomImage.src}
            alt="Residential architecture category"
            className="project-image"
          />
        </div>
        <div className="left">
          <div className="projLogo"/>
          <h3>{project.title}</h3>
          <div className="city">City</div>
        </div>
        <div className="right">
          {/* Note: in React/Preact, use <img>, not astro:assets <Image> */}
          <img
            src={RandomImage.src}
            alt="Residential architecture category"
            className="project-image"
          />
        </div>
        <div className="left">
          <div className="projLogo"/>
          <h3>{project.title}</h3>
          <div className="city">City</div>
        </div>
        <div className="right">
          {/* Note: in React/Preact, use <img>, not astro:assets <Image> */}
          <img
            src={RandomImage.src}
            alt="Residential architecture category"
            className="project-image"
          />
        </div>
      </>}
    </HorizontalDragScroll>
  );
};

export default ProjectItem;
