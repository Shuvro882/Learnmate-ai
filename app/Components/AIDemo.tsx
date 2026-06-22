export default function AIDemo() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          AI Learning Tools Preview
        </h2>

        <p className="mt-3 text-gray-600">
          Experience how AI can generate learning materials instantly.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* AI Notes Preview */}
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold text-lg">
            AI Notes Generator
          </h3>

          <div className="mt-4 rounded-lg border p-3">
            React Fundamentals
          </div>

          <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white">
            Generate Notes
          </button>

          <div className="mt-6 rounded-xl bg-gray-50 p-4">
            Structured study notes will appear here after AI processing.
          </div>
        </div>

        {/* AI Quiz Preview */}
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold text-lg">
            AI Quiz Generator
          </h3>

          <div className="mt-4 rounded-lg border p-3">
            JavaScript ES6
          </div>

          <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white">
            Generate Quiz
          </button>

          <div className="mt-6 rounded-xl bg-gray-50 p-4">
            Quiz questions will appear here after generation.
          </div>
        </div>

      </div>
    </section>
  );
}