import React from "react";
import ReactTag, { ReactTagProps } from "./ReactTag";

export type ReactTagBlockProps = {
  name: string;
  as?: ReactTagProps["as"];
  size?: ReactTagProps["size"];
  properties?: ReactTagProps["properties"];
  children?: React.ReactNode;
};

export function ReactTagBlock({
  as,
  size,
  name,
  properties,
  children,
}: ReactTagBlockProps) {
  return (
    <section className="relative">
      <ReactTag
        as={as}
        size={size}
        sticky
        name={name}
        properties={properties}
        selfClosing={children === undefined}
      />
      {children && (
        <>
          <div className="space-y-6 border-l border-pink-200 dark:border-slate-700 pl-6">
            {children}
          </div>
          <ReactTag as={as} name={name} closeTag />
        </>
      )}
    </section>
  );
}
