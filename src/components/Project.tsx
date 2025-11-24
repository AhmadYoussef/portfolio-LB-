import type {FunctionalComponent} from "preact";
import type {Project} from "../data/Projects.ts";
import RandomImage from "../assets/random.png";
import "../styles/project.css"
import useFocus from "../hooks/useFocus.ts";
import Modal from "./Modal.tsx";

interface Props {
  project: Project;
}

const ProjectItem: FunctionalComponent<Props> = ({project}) => {
  const [isFocus, setIsFocus, rootRef] = useFocus(project);

  const handleClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.slug);
    history.pushState(null, "", url.toString());

    window.dispatchEvent(new Event("project-changed"));
  };

  return (
    <Modal containerRef={rootRef}
           isFocus={isFocus}
           setIsFocus={setIsFocus}
           onClick={handleClick}>
      <div className="project-info">
        <div className="left">
          <div className="projLogo"/>
          <h3>{project.title}</h3>
          <div className="city">City</div>
          <div className="year">2025</div>
        </div>
        <div className="right">
          {/* Note: in React/Preact, use <img>, not astro:assets <Image> */}
          <img
            src={RandomImage.src}
            alt="Residential architecture category"
            className="project-image"
          />
        </div>
      </div>

      {isFocus && <>
        <div className="project-info">
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
        </div>
        <div className="project-info">
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
        </div>
        <div className="project-info">
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
        </div>
      </>}
    </Modal>
  );
};

export default ProjectItem;
