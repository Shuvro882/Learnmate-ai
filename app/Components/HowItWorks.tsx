export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Topic",
      desc: "Enter any subject or topic you want to learn.",
    },
    {
      title: "AI Processing",
      desc: "Our AI analyzes and generates structured content.",
    },
    {
      title: "Get Results",
      desc: "Receive notes, quizzes, and recommendations instantly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          How LearnMate AI Works
        </h2>
        <p className="text-gray-600 mt-3">
          Simple 3-step process to boost your learning experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative">

        {steps.map((step, index) => (
          <div
            key={index}
            className="border bg-white rounded-xl p-6 text-center relative"
          >
            {/* Step Number */}
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              {index + 1}
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {step.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {step.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}