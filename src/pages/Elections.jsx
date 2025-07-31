import { Link } from "react-router-dom";

export default function Elections() {
  const elections = [
    { id: 1, title: "Presidential 2025", status: "Ongoing" },
    { id: 2, title: "College Election", status: "Upcoming" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Elections</h2>
      <ul className="space-y-4">
        {elections.map((e) => (
          <li
            key={e.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <span>{e.title}</span>
            <Link
              to={`/vote/${e.id}`}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Vote
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
