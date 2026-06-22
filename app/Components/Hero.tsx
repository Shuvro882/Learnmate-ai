export default function Hero() {
  return (
    <section className="min-h-[65vh] flex items-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left Side */}
        <div>
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium">
            🚀 AI-Powered Learning Assistant
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn Faster with
            <span className="text-indigo-600"> AI-Powered </span>
            Study Tools
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Generate study notes, create quizzes, and receive personalized
            learning recommendations to improve your study experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-lg font-medium">
              Explore Features
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">
              AI Notes Generator
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Topic: React Fundamentals
            </p>
            <div className="mt-4 rounded-lg bg-gray-100 p-3 text-sm">
              Notes generated successfully...
            </div>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">
              AI Quiz Generator
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              10 practice questions ready
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">
              Smart Recommendation
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Recommended topic: JavaScript ES6
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}