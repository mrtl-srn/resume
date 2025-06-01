import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { defaultSchema } from "hast-util-sanitize";
import rehypeSanitize, { Options as SanitizeOptions } from "rehype-sanitize";

export const markOnlySchema: SanitizeOptions = {
  ...defaultSchema,
  tagNames: ["mark", "p"],
  attributes: { mark: [] },
};

type MarkdownRendererProps = {
  children: string;
};

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, [rehypeSanitize, markOnlySchema]]}
    >
      {children}
    </ReactMarkdown>
  );
}
