import React, { PropsWithChildren, useMemo } from "react";
import "./IDECodeLine.css";

interface CodeLineProps {
  tag?: string;
  props?: Record<string, string | number | boolean>;
  selfClosing?: boolean;
  indentSize?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
}

const IDECodeLine: React.FC<PropsWithChildren<CodeLineProps>> = ({
  tag = "div",
  props = {},
  selfClosing = false,
  indentSize = 2,
  className = "",
  as = "h1",
  size = "base",
  children,
}) => {
  const As = as;

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  // Fonction pour formater les props avec couleurs (mémorisée)
  const formattedPropsWithColors = useMemo(() => {
    return Object.entries(props)
      .map(([key, value], index) => {
        if (typeof value === "boolean") {
          if (!value) return null;
          return (
            <span key={index} className="text-green-300">
              {` ${key}`}
            </span>
          );
        }

        if (typeof value === "string") {
          return (
            <span key={index}>
              <span className="text-blue-400">{` ${key}=`}</span>
              <span className="text-blue-400">{`"`}</span>
              <span className="text-amber-50">{`${value}`}</span>
              <span className="text-blue-400">{`"`}</span>
            </span>
          );
        }

        if (typeof value === "number") {
          return (
            <span key={index}>
              <span className="text-blue-400">{` ${key}=`}</span>
              <span className="text-blue-400">{`{`}</span>
              <span className="text-orange-400">{`${value}`}</span>
              <span className="text-blue-400">{`}`}</span>
            </span>
          );
        }

        return null;
      })
      .filter(Boolean);
  }, [props]);

  return (
    <As
      className={`font-mono ${sizeClasses[size]} ${className}`}
      style={{ "--indent-size": `${indentSize}ch` } as React.CSSProperties}
      role="code"
      aria-label={`Code HTML : balise ${tag}${Object.keys(props).length > 0 ? ` avec ${Object.keys(props).length} attribut${Object.keys(props).length > 1 ? "s" : ""}` : ""}`}
    >
      {selfClosing ? (
        <div role="presentation">
          <span className="text-white" aria-hidden="true">
            &lt;
          </span>
          <span
            className="text-pink-500"
            role="text"
            aria-label={`Nom de balise : ${tag}`}
          >
            {tag}
          </span>
          <span
            className="props-container"
            role="list"
            aria-label="Attributs de la balise"
          >
            {formattedPropsWithColors.map((prop, index) => (
              <span key={index} className="prop-item" role="listitem">
                {prop}
              </span>
            ))}
          </span>
          <span className="text-white" aria-hidden="true">
            {" "}
            /&gt;
          </span>
        </div>
      ) : (
        <div role="presentation">
          <span className="text-white" aria-hidden="true">
            &lt;
          </span>
          <span
            className="text-pink-500"
            role="text"
            aria-label={`Nom de balise : ${tag}`}
          >
            {tag}
          </span>
          <span
            className="props-container"
            role="list"
            aria-label="Attributs de la balise"
          >
            {formattedPropsWithColors.map((prop, index) => (
              <span key={index} className="prop-item" role="listitem">
                {prop}
              </span>
            ))}
          </span>
          <span className="text-white" aria-hidden="true">
            &gt;
          </span>
          {children && (
            <div
              className="font-mono space-y-3 md:space-y-6 border-l border-slate-700 pl-3 md:pl-6"
              role="group"
              aria-label="Contenu de la balise"
            >
              {children}
            </div>
          )}
          <span className="text-white" aria-hidden="true">
            &lt;/
          </span>
          <span className="text-pink-500" role="text">
            {tag}
          </span>
          <span className="text-white" aria-hidden="true">
            &gt;
          </span>
        </div>
      )}
    </As>
  );
};

export default IDECodeLine;
