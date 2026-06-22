import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="rounded-3xl border px-6 py-16 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Learn Smarter?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Use AI-powered study tools to generate notes, create quizzes,
          and improve your learning experience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white"
          >
            Get Started
          </Link>

          <Link
            href="/explore"
            className="rounded-lg border px-6 py-3 font-medium"
          >
            Explore Features
          </Link>

        </div>

      </div>
    </section>
  );
}