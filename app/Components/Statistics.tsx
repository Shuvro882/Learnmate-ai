const stats = [
  {
    title: "Study Notes",
    value: "Dynamic",
    description: "Generated from user requests",
  },
  {
    title: "AI Quizzes",
    value: "Dynamic",
    description: "Created from learning topics",
  },
  {
    title: "Recommendations",
    value: "Dynamic",
    description: "Based on learner activity",
  },
  {
    title: "Learning Progress",
    value: "Dynamic",
    description: "Tracked through dashboard",
  },
];

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Learning Insights
        </h2>

        <p className="mt-3 text-gray-600">
          Track and analyze learning activities through AI-powered tools.
        </p>
      </div>

      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-indigo-600">
              {stat.value}
            </h3>

            <p className="mt-2 font-medium">
              {stat.title}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}