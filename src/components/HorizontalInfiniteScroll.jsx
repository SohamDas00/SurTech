import React from "react";

// HorizontalInfiniteScroll.jsx
// A smooth infinite scrolling text line (right to left)

export default function HorizontalInfiniteScroll({
  text = "Welcome to our conference      ☆      Innovation     ☆     Technology     ☆     Research     ☆     Future     ☆     ",
  speed = 30, // smaller = faster
}) {
  return (
    <div className="scroll-container">
      <div
        className="scroll-content"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{text.repeat(100)}</span>
      </div>
    </div>
  );
}
