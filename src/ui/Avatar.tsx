export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 p-1">
      <img
        src={src}
        alt={alt}
        className="w-48 h-48 rounded-full object-cover"
      />
    </div>
  );
}
