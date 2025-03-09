import clsx from "clsx";
import { Fragment } from "react";

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
  sticky?: boolean;
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
  sticky = false,
}: ReactTagProps) {
  const As = as;

  const sizeClasses = {
    h1: "text-base",
    h2: "text-base",
    h3: "text-base",
    h4: "text-base",
    h5: "text-base",
    h6: "text-base",
  };

  const stickyOgreensets = {
    h1: "sticky top-0 z-60",
    h2: "sticky top-6 z-50",
    h3: "sticky top-12 z-40",
    h4: "sticky top-18 z-30",
    h5: "sticky top-24 z-20",
    h6: "sticky top-30 z-10",
  };

  const wrapperClasses = clsx(
    "flex items-center gap-2 bg-gray-800 dark:bg-slate-800 mb-2",
    sizeClasses[as],
    sticky && stickyOgreensets[as]
  );
  const isEmptyObject = (obj: object): boolean =>
    Object.keys(obj).length === 0 && obj.constructor === Object;

  return (
    <div className={wrapperClasses}>
      <As className="font-mono text-green-500 dark:text-gray-200 font-normal">
        <span>&lt;</span>

        {closeTag && <span>/</span>}

        <span className="text-pink-500 dark:text-pink-400">{name}</span>

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
                      className="text-blue-500 dark:text-blue-400"
                    >{` ${key}`}</span>
                  )}

                  {showNumber && (
                    <span className="inline-flex flex-nowrap">
                      <span className="text-blue-500 dark:text-blue-400">{` ${key}=`}</span>
                      <span className="text-pink-500 dark:text-blue-400">{`{`}</span>
                      <span className="text-green-500 dark:text-gray-200">
                        {value}
                      </span>
                      <span className="text-pink-500 dark:text-blue-400">{`}`}</span>
                    </span>
                  )}

                  {showString && (
                    <Fragment>
                      <span className="text-blue-500 dark:text-blue-400">{` ${key}=`}</span>
                      <span className="text-green-500 dark:text-blue-400">{`"`}</span>
                      <span className="text-green-500 dark:text-gray-200">{`${value}`}</span>
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
