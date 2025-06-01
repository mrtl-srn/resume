import { Fragment } from "react";
import { cn, isEmptyObject } from "../lib/utils";

export type jsonProps =
  | string
  | number
  | boolean
  | object
  | Array<string | number | boolean | object>;

export type ReactTagProps = {
  name: string;
  properties?: Record<string, jsonProps>;
  closeTag?: boolean;
  selfClosing?: boolean;
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
  sticky?: boolean;
  className?: string;
};

const isBoolean = (value: jsonProps): value is boolean =>
  typeof value === "boolean";
const isNumber = (value: jsonProps): value is number =>
  typeof value === "number";
const isString = (value: jsonProps): value is string =>
  typeof value === "string";

function ReactTag({
  name,
  properties = {},
  closeTag = false,
  selfClosing = false,
  as = "h1",
  size = "base",
  sticky = false,
  className = "",
}: ReactTagProps) {
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

  const stickyOffsets = {
    h1: "sticky top-0 z-60",
    h2: "sticky top-6 z-50",
    h3: "sticky top-12 z-40",
    h4: "sticky top-18 z-30",
    h5: "sticky top-24 z-20",
    h6: "sticky top-30 z-10",
  };

  const wrapperClasses = cn(
    "flex items-center gap-2 mb-2",
    sizeClasses[size],
    sticky && stickyOffsets[as],
    className
  );

  return (
    <div className={wrapperClasses}>
      <As className="font-mono text-green-500 dark:text-gray-200 font-normal">
        <span>&lt;</span>

        {closeTag && <span>/</span>}

        <span className="text-pink-500 dark:text-pink-500">{name}</span>

        {!closeTag && !isEmptyObject(properties) && (
          <div className="inline-flex items-center gap-2 ml-2">
            {Object.entries(properties).map(([key, value]) => {
              const showBoolean = isBoolean(value);
              const showNumber = isNumber(value);
              const showString = isString(value);
              const showObject = !showBoolean && !showNumber && !showString;

              return (
                <span key={key} className="text-blue-500 dark:text-gray-200">
                  {showBoolean && (
                    <span
                      key={key}
                      className="text-blue-500 dark:text-cyan-300"
                    >{` ${key}`}</span>
                  )}

                  {showNumber && (
                    <span className="inline-flex flex-nowrap">
                      <span className="text-blue-500 dark:text-blue-400">{` ${key}=`}</span>
                      <span className="text-pink-500 dark:text-blue-400">{`{`}</span>
                      <span className="text-green-500 dark:text-green-500">
                        {value}
                      </span>
                      <span className="text-pink-500 dark:text-blue-400">{`}`}</span>
                    </span>
                  )}

                  {showString && (
                    <Fragment>
                      <span className="text-blue-500 dark:text-blue-400">{` ${key}=`}</span>
                      <span className="text-green-500 dark:text-blue-400">{`"`}</span>
                      <span className="text-green-500 dark:text-amber-50">{`${value}`}</span>
                      <span className="text-green-500 dark:text-blue-400">{`"`}</span>
                    </Fragment>
                  )}

                  {showObject && (
                    <span className="text-green-500 dark:text-blue-400">{` ${key}={${JSON.stringify(value)}}`}</span>
                  )}
                </span>
              );
            })}
          </div>
        )}
        {selfClosing && (
          <span className="text-pink-500 dark:text-gray-200"> /</span>
        )}
        <span>&gt;</span>
      </As>
    </div>
  );
}

export default ReactTag;
