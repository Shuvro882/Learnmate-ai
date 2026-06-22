export default function Features() {
  const features = [
    {
      title: "AI Notes Generator",
      desc: "Generate smart and structured study notes instantly.",
    },
    {
      title: "AI Quiz Generator",
      desc: "Create practice quizzes from any topic automatically.",
    },
    {
      title: "Smart Recommendations",
      desc: "Get personalized learning suggestions based on usage.",
    },
    {
      title: "Study Planner",
      desc: "Organize your daily study schedule efficiently.",
    },
    {
      title: "AI Chat Assistant",
      desc: "Ask questions and get instant AI explanations.",
    },
    {
      title: "Progress Tracker",
      desc: "Track your learning progress over time.",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          Powerful AI Features
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to learn faster and smarter in one place.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}