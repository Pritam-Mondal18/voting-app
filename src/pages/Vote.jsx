export default function Vote() {
  const candidates = ["Alice", "Bob", "Charlie"];

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Vote for Your Candidate</h2>
      {candidates.map((name) => (
        <button
          key={name}
          className="w-full mb-3 py-2 bg-blue-100 rounded hover:bg-blue-300"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
