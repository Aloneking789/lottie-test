"use client";

import React, { useRef, useState, useEffect } from "react";
// import WavyLineIcon from '../../Components/WavySection'

/**
 * Splits the provided text into an array of characters.
 */
function splitIntoLetters(text) {
  return text.split("");
}

export default function LockedScrollParagraph({
  text,
  style = {},
  threshold = 0.5,
  rootMargin = "-25% 0px -25% 0px",
}) {
  const containerRef = useRef(null);

  // Indicates whether the paragraph is in view.
  const [isActive, setIsActive] = useState(false);
  // The number of letters that are currently highlighted.
  const [letterIndex, setLetterIndex] = useState(0);
  // Whether scrolling is currently locked.
  const [locked, setLocked] = useState(false);
  // Indicates whether the user has interacted (scrolled) during this activation cycle.
  const [hasInteracted, setHasInteracted] = useState(false);

  const letters = splitIntoLetters(text);

  // 1) Use IntersectionObserver to mark the paragraph active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [threshold, rootMargin]);

  // 2) When the paragraph becomes active for the first time, lock scrolling.
  useEffect(() => {
    if (isActive) {
      setLocked(true);
      document.body.style.overflow = "hidden";
    }
  }, [isActive]);

  // 3) Listen to wheel events.
  useEffect(() => {
    // We require the paragraph to be active.
    if (!isActive) return;

    function onWheel(e) {
      // If not locked (and the text is un-highlighted) and the user scrolls downward,
      // then lock scrolling to start the highlighting cycle.
      if (!locked && letterIndex === 0 && e.deltaY > 0) {
        setLocked(true);
        document.body.style.overflow = "hidden";
      }
      // Process the event only if we are locked.
      if (locked) {
        e.preventDefault();
        e.stopPropagation();
        setHasInteracted(true);
        setLetterIndex((prev) => {
          let next = prev + (e.deltaY > 0 ? 1 : -1);
          if (next < 0) next = 0;
          if (next > letters.length) next = letters.length;
          return next;
        });
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel, { passive: false });
  }, [isActive, locked, letterIndex, letters.length]);

  // 4) Listen to keyboard events for accessibility.
  useEffect(() => {
    if (!isActive) return;

    function onKeyDown(e) {
      const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "];
      if (!keys.includes(e.key)) return;
      // If not locked and the text is un-highlighted and the user scrolls down, lock scrolling.
      if (!locked && letterIndex === 0 && (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ")) {
        setLocked(true);
        document.body.style.overflow = "hidden";
      }
      e.preventDefault();
      e.stopPropagation();
      setHasInteracted(true);
      setLetterIndex((prev) => {
        let next = prev;
        if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
          next = prev + 1;
        } else {
          next = prev - 1;
        }
        if (next < 0) next = 0;
        if (next > letters.length) next = letters.length;
        return next;
      });
    }

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isActive, locked, letterIndex, letters.length]);

  // 5) Unlock scrolling when either:
  //    - All letters are highlighted (letterIndex === letters.length), or
  //    - The user has interacted and scrolled back up to 0 (the text is completely un-highlighted).
  useEffect(() => {
    if (locked) {
      if (letterIndex === letters.length || (hasInteracted && letterIndex === 0)) {
        setLocked(false);
        document.body.style.overflow = "";
      }
    }
  }, [letterIndex, letters.length, locked, hasInteracted]);

  // 6) Group revealed and hidden text into two spans for natural wrapping.
  const revealedText = letters.slice(0, letterIndex).join("");
  const hiddenText = letters.slice(letterIndex).join("");

  return (
    <section
      ref={containerRef}
      style={{
        // Provide sufficient vertical space for scroll detection.
        // minHeight: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {/* <WavyLineIcon/> */}
      <div
        style={{
          width: "80%",
          textAlign: "center",
          whiteSpace: "normal",
          wordBreak: "normal",
        }}
      >
        <span style={{ color: "#B5F2EF", transition: "color 0.3s ease" }}>
          {revealedText}
        </span>
        <span style={{ color: "#B5F2EF4D", transition: "color 0.3s ease" }}>
          {hiddenText}
        </span>
      </div>
    </section>
  );
}
