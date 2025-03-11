const Hobbies = () => {
  const hobbies = ["Photography", "Reading", "Hiking", "Coding", "Gaming"];

  return (
    <section className="space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 pb-4 border-b">
          <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
