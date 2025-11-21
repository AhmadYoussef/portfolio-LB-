import type {RefObject} from "preact";
import {useRef, useState} from "preact/hooks";
import "../styles/modal.css";

interface Props {
  containerRef: RefObject<HTMLElement>;
  isFocus: boolean;
  onClick: () => void;
  setIsFocus: (value: boolean) => void;
  children: preact.ComponentChildren; // or React.ReactNode if using React

}

export default function Modal({containerRef, isFocus, setIsFocus, onClick, children}: Props) {

  const close = () => {
    setIsFocus(false)
  }

  return (<>
      {isFocus && <>
        <div className="blackBackground" onClick={close}/>
        <div className="modal">
          <section ref={containerRef} className="project focus" onClick={onClick}>
            {children}
          </section>
        </div>
      </>}
      <section ref={containerRef} className="project center" onClick={onClick}>
        {children}
      </section>
    </>
  );
}
