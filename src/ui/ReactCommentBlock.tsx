import React from "react";
import ReactComment from "./ReactComment";

export type ReactCommentBlockProps = {
  children?: React.ReactNode;
  singleLine?: boolean;
};

export function ReactCommentBlock({
  singleLine = false,
  children,
}: ReactCommentBlockProps) {
  return (
    <section className="relative">
      {!singleLine && <ReactComment start />}

      {React.Children.map(children, (child) => {
        return <ReactComment singleLine={singleLine}>{child}</ReactComment>;
      })}

      {!singleLine && <ReactComment end />}
    </section>
  );
}
