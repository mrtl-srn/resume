import { cn } from "../lib/utils";

export type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Avatar({ src, alt, className = "" }: AvatarProps) {
  return (
    <div className="shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 p-1">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-56 h-56 md:w-48 md:h-48 rounded-full object-cover",
          className
        )}
      />
    </div>
  );
}
