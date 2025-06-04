export function FullName({ fullName }: { fullName: string }) {
  return (
    <h1 className="text-4xl font-medium  text-blue-400 mt-4 text-center md:text-left">
      {fullName}
    </h1>
  );
}
