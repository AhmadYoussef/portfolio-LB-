import type {RefObject} from "preact";
import { useRef, useState } from "preact/hooks";
import "../styles/horizontalScroll.css";

interface Props {
  containerRef: RefObject<HTMLElement>;
  isFocus: boolean;
  onClick: () => void;
  children: preact.ComponentChildren; // or React.ReactNode if using React

}

export default function HorizontalDragScroll({ containerRef, isFocus, onClick, children }: Props) {
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);


  const handleMouseDown: preact.JSX.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = containerRef.current;
    if (!el) return;

    // avoid drag starting from interactive elements
    const target = e.target as HTMLElement;
    if (target.closest("a, button, video, input, textarea")) return;

    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    el.classList.add("dragging");
  };

  const handleTouchStart: preact.JSX.TouchEventHandler<HTMLDivElement> = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const touch = e.touches[0];
    isDraggingRef.current = true;
    lastXRef.current = touch.clientX;
    el.classList.add("dragging");
  };

  const handleMouseUpOrLeave: preact.JSX.MouseEventHandler<HTMLDivElement> = () => {
    const el = containerRef.current;
    isDraggingRef.current = false;
    el?.classList.remove("dragging");
  };

  const handleMouseMove: preact.JSX.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = containerRef.current;
    if (!isDraggingRef.current || !el) return;

    e.preventDefault();
    const currentX = e.clientX;
    const delta = currentX - lastXRef.current;

    el.scrollLeft -= delta;

    lastXRef.current = currentX;
    console.log("delta:", delta, "scrollLeft:", el.scrollLeft);

  };

  const handleTouchMove: preact.JSX.TouchEventHandler<HTMLDivElement> = (e) => {
    const el = containerRef.current;
    if (!isDraggingRef.current || !el) return;

    const touch = e.touches[0];
    const currentX = touch.clientX;
    const delta = currentX - lastXRef.current;
    el.scrollLeft -= delta;
    lastXRef.current += currentX;
  };

  const handleTouchEnd: preact.JSX.TouchEventHandler<HTMLDivElement> = () => {
    const el = containerRef.current;
    isDraggingRef.current = false;
    el?.classList.remove("dragging");
  };

  if(!isFocus){
    return (
      <section ref={containerRef} className="project noScroll center"  onClick={onClick}>
        {children}
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className={`project noScroll focus horizontal-drag-scroll`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </section>
  );
}
