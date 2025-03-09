export type ReactCommentProps = {
  children?: React.ReactNode;
  start?: boolean;
  end?: boolean;
  singleLine?: boolean;
  className?: string;
};

function ReactComment({
  start = false,
  end = false,
  singleLine = false,
  className = "",
  children,
}: ReactCommentProps) {
  return (
    <div className="flex items-start gap-2">
      {start && <span className="text-pink-500 dark:text-pink-400">/**</span>}
      {!start && !end && (
        <>
          <span className="text-pink-500 dark:text-pink-400">
            {singleLine ? "//" : "*"}{" "}
          </span>
          <span className={`${className}`}>{children}</span>
        </>
      )}
      {end && <span className="text-pink-500 dark:text-pink-400">*/</span>}
    </div>
  );
}

export default ReactComment;
